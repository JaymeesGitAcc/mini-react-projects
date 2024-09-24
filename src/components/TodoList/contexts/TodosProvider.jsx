import React, { useEffect, useReducer } from "react";
import todosReducer, {
    TodosContext,
    TodosDispatchContext,
} from "./TodosContext";

const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(
        todosReducer,
        localStorage.getItem("todoList")
            ? JSON.parse(localStorage.getItem("todoList"))
            : []
    );

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    );
};

export default TodosProvider;
