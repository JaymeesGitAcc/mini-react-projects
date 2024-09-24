import { createContext } from "react";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export default function todosReducer(state, action) {
    switch (action.type) {
        case "added": {
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    completed: false,
                },
            ];
        }
        case "deleted": {
            return state.filter((item) => item.id !== action.payload.id);
        }
        case "updated": {
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, name: action.payload.name }
                    : item
            );
        }
        case "toggle": {
            return state.map((item) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          completed: !item.completed,
                      }
                    : item
            );
        }
        default: {
            throw Error("Invalid action type", action.type);
        }
    }
}
