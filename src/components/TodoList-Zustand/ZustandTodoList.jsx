import { useEffect, useState } from "react"
import useStore from "./store/useStore"
import TodoItem from "./TodoItem"

const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const ZustandTodoList = () => {
    const [input, setInput] = useState("")
    const [isEditing, setIsEditing] = useState(null)

    const list = useStore((state) => state.list)
    const addTodo = useStore((state) => state.addTodo)
    const updateTodo = useStore((state) => state.updateTodo)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input && !isEditing) {
            const newTodo = {
                id: crypto.randomUUID(),
                name: input,
                completed: false,
            }

            addTodo(newTodo)
            setInput("")
        } else if (input && isEditing) {
            const updateValue = {
                id: isEditing.id,
                name: input,
            }

            updateTodo(updateValue)
            setInput("")
            setIsEditing(null)
        } else {
            alert("Please enter something!")
        }
    }

    useEffect(() => {
        setToLocalStorage("todos-zustand", list)
    }, [list])

    return (
        <div className="min-h-screen bg-zinc-800 flex justify-center items-center">
            <div className="min-h-[200px] w-[600px] bg-zinc-100 rounded-xl p-4">
                <h1 className="text-xl font-semibold my-2">My Todos</h1>

                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border p-2 rounded w-1/2"
                            placeholder="wash car, go to gym..."
                        />
                        <button className="p-2 bg-violet-500 text-white rounded">
                            {!isEditing ? "Add" : "Save"}
                        </button>
                    </div>
                </form>

                <div>
                    {list.length ? (
                        list.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                isEditing={isEditing}
                                setIsEditing={setIsEditing}
                                setInput={setInput}
                            />
                        ))
                    ) : (
                        <p className="text-center p-2 text-gray-400">
                            List is empty
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ZustandTodoList
