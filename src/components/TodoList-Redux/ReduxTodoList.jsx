import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./features/todoSlice"
import TodoItem from "./TodoItem"

const ReduxTodoList = () => {
    const [input, setInput] = useState("")

    const todos = useSelector((state) => state.todos.list)
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (input) {
            const todo = {
                id: crypto.randomUUID(),
                name: input,
                completed: false,
            }
            dispatch(addTodo(todo))
            setInput("")
        } else {
            alert("Please enter something!")
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="min-w-[500px] shadow-lg rounded-md p-4 bg-slate-200">
                <h1 className="text-xl">My Todos</h1>
                <form onSubmit={handleAddTodo}>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            className="border rounded my-4 p-2"
                            placeholder="enter todo"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="p-2 bg-violet-500 rounded text-white"
                        >
                            Add
                        </button>
                    </div>
                </form>

                <div>
                    <ul>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReduxTodoList
