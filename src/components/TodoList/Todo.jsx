import { useContext, useState } from "react"
import { TodosDispatchContext } from "./contexts/TodosContext"

const Todo = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedValue, setEditedValue] = useState("")

    const dispatch = useContext(TodosDispatchContext)

    const handleChange = () => {
        dispatch({
            type: "toggle",
            payload: {
                id: todo.id,
            },
        })
    }

    const onEdit = (e) => {
        e.preventDefault()
        if (editedValue) {
            dispatch({
                type: "updated",
                payload: {
                    id: todo.id,
                    name: editedValue,
                },
            })
        }
        setEditedValue("")
        setIsEditing(false)
    }

    const deleteTodo = () => {
        dispatch({
            type: "deleted",
            payload: {
                id: todo.id,
            },
        })
    }

    return todo ? (
        <div className="flex items-center">
            {!isEditing ? (
                <label htmlFor={todo.id} className="flex items-center gap-4">
                    <input
                        type="checkbox"
                        id={todo.id}
                        defaultChecked={todo.completed}
                        onChange={handleChange}
                    />
                    <p className={todo.completed ? "line-through" : ""}>
                        {todo.name}
                    </p>
                </label>
            ) : (
                <form onSubmit={onEdit} className="border w-[50%]">
                    <input
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        placeholder={todo.name}
                        className="w-full"
                    />
                </form>
            )}

            <div className="ml-auto my-2 space-x-2">
                {!isEditing ? (
                    !todo.completed ? (
                        <button
                            className="px-4 py-2 ring-2 rounded text-indigo-400"
                            onClick={() => setIsEditing(true)}
                        >
                            edit
                        </button>
                    ) : null
                ) : (
                    <button
                        className="px-4 py-2 ring-2 rounded text-indigo-400"
                        onClick={onEdit}
                        type="submit"
                    >
                        save
                    </button>
                )}
                <button
                    className="px-4 py-2 ring-2 rounded text-indigo-400"
                    onClick={deleteTodo}
                >
                    delete
                </button>
            </div>
        </div>
    ) : null
}

export default Todo
