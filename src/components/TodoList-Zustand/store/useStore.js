import { create } from "zustand"

const dataFromLocalStorage = localStorage.getItem("todos-zustand")
    ? JSON.parse(localStorage.getItem("todos-zustand"))
    : []

const useStore = create((set) => ({
    list: dataFromLocalStorage,
    addTodo: (payload) =>
        set((state) => ({
            list: [...state.list, payload],
        })),
    deleteTodo: (payload) =>
        set((state) => ({
            list: state.list.filter((todo) => payload.id !== todo.id),
        })),
    changeCompleted: (payload) =>
        set((state) => ({
            list: state.list.map((todo) =>
                payload.id === todo.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            ),
        })),
    updateTodo: (payload) =>
        set((state) => ({
            list: state.list.map((todo) =>
                todo.id === payload.id ? { ...todo, name: payload.name } : todo
            ),
        })),
}))

export default useStore
