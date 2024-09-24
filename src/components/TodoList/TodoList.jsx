import { useContext, useState } from "react"
import Todo from "./Todo"
import { TodosContext, TodosDispatchContext } from "./contexts/TodosContext"

const TodoList = () => {
    const [input, setInput] = useState("")
    const todos = useContext(TodosContext)
    const dispatch = useContext(TodosDispatchContext)

    const addTodo = (e) => {
        e.preventDefault()
        if (input) {
            const id = crypto.randomUUID()
            dispatch({
                type: "added",
                payload: {
                    name: input,
                    id,
                },
            })
            setInput("")
        }
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Enter task"
                        className="grow p-2"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="px-4 py-2 ring-2 rounded">
                        Add
                    </button>
                </div>
            </form>
            <ul>
                {todos?.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList
