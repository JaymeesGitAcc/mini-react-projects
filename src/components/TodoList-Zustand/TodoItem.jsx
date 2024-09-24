import useStore from "./store/useStore"

const TodoItem = ({ todo, setIsEditing, setInput, isEditing }) => {
    const deleteTodo = useStore((state) => state.deleteTodo)
    const changeStatus = useStore((state) => state.changeCompleted)

    const handleEdit = (todo) => {
        setIsEditing({ ...todo })
        setInput(todo.name)
    }

    const handleCancel = () => {
        setIsEditing(null)
        setInput("")
    }

    return (
        <div className="flex gap-1 items-center my-3 p-2 rounded odd:bg-slate-300 even:bg-slate-200">
            <div className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.completed}
                    onChange={() => changeStatus({ id: todo.id })}
                />
                <label htmlFor={todo.id}>{todo.name}</label>
            </div>

            <div className="flex gap-2 ml-auto">
                <button
                    className="bg-green-500 px-2 py-1 rounded"
                    onClick={() => handleEdit(todo)}
                >
                    edit
                </button>
                {isEditing && isEditing.id === todo.id ? (
                    <button
                        onClick={handleCancel}
                        className="bg-red-400 px-2 py-1 rounded"
                    >
                        cancel
                    </button>
                ) : (
                    <button
                        onClick={() => deleteTodo({ id: todo.id })}
                        className="bg-red-400 px-2 py-1 rounded"
                    >
                        del
                    </button>
                )}
            </div>
        </div>
    )
}

export default TodoItem
