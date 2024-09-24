import { createSlice } from "@reduxjs/toolkit"

const dataFromLocalStorage = localStorage.getItem("todos-redux")
    ? JSON.parse(localStorage.getItem("todos-redux"))
    : null

const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const initialState = {
    list: dataFromLocalStorage || [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list = [...state.list, action.payload]
            updateLocalStorage("todos-redux", state.list)
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter(
                (todo) => action.payload.id !== todo.id
            )
            updateLocalStorage("todos-redux", state.list)
        },
        changeCompleteStatus: (state, action) => {
            state.list = state.list.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
            updateLocalStorage("todos-redux", state.list)
        },
        updateTodo: (state, action) => {
            state.list = state.list.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, name: action.payload.newName }
                    : todo
            )
            updateLocalStorage("todos-redux", state.list)
        },
    },
})

export const { addTodo, deleteTodo, changeCompleteStatus, updateTodo } =
    todoSlice.actions

export default todoSlice.reducer
