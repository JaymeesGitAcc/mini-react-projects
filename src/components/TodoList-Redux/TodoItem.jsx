import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import {
    changeCompleteStatus,
    deleteTodo,
    updateTodo,
} from "./features/todoSlice"

const TodoItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editInput, setEditInput] = useState("")
    const editInputRef = useRef(null)

    const dispatch = useDispatch()

    const handleDelete = (todoId) => {
        dispatch(deleteTodo({ id: todoId }))
    }

    const handleChange = (todoId) => {
        dispatch(changeCompleteStatus({ id: todoId }))
    }

    const handleSave = (todoId) => {
        if (editInput) {
            dispatch(
                updateTodo({
                    id: todoId,
                    newName: editInput,
                })
            )
        }
        setIsEditing(false)
    }

    useEffect(() => {
        if (isEditing) {
            editInputRef.current.focus()
            setEditInput(todo.name)
        }
    }, [editInputRef, isEditing])

    return (
        <li className="flex items-center gap-2 p-2 odd:bg-gray-200 even:bg-gray-100 rounded my-2">
            {!isEditing ? (
                <div className="flex items-center gap-2 p-1">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleChange(todo.id)}
                        id={todo.id}
                    />
                    <label
                        htmlFor={todo.id}
                        className={`mb-1 ${
                            todo.completed ? "line-through" : null
                        }`}
                    >
                        {todo.name}
                    </label>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        ref={editInputRef}
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        className="p-1 border rounded"
                        placeholder="update todo.."
                    />
                </div>
            )}

            <div className="flex items-center gap-2 ml-auto">
                {!isEditing ? (
                    <button
                        className="py-1 px-4 rounded bg-green-500 text-white"
                        onClick={() => {
                            setIsEditing(true)
                        }}
                    >
                        edit
                    </button>
                ) : (
                    <button
                        className={`py-1 px-4 rounded bg-green-500 text-white ${
                            editInput !== ""
                                ? "opacity-100 cursor-pointer"
                                : "opacity-50 cursor-not-allowed"
                        }`}
                        onClick={() => handleSave(todo.id)}
                        disabled={editInput !== "" ? false : true}
                    >
                        save
                    </button>
                )}
                {!isEditing ? (
                    <button
                        className="py-1 px-4 rounded bg-red-500 text-white"
                        onClick={() => handleDelete(todo.id)}
                    >
                        del
                    </button>
                ) : (
                    <button
                        className="py-1 px-4 rounded bg-red-500 text-white"
                        onClick={() => setIsEditing(false)}
                    >
                        cancel
                    </button>
                )}
            </div>
        </li>
    )
}

export default TodoItem
