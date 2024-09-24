import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import ZustandTodoList from "./components/TodoList-Zustand/ZustandTodoList"
import ReduxTodoList from "./components/TodoList-Redux/ReduxTodoList"
import Boxes from "./components/Boxes/Boxes"
import CommentSection from "./components/CommentSection/CommentSection"
import { comments } from "./data/comments.js"
import NestedCircles from "./components/NestedCircles/NestedCircles.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <ZustandTodoList />,
            },
            {
                path: "boxes",
                element: <Boxes />,
            },
            {
                path: "nested-circles",
                element: <NestedCircles />,
            },
            {
                path: "comment-section",
                element: <CommentSection comments={comments} />,
            },
            {
                path: "zustand-todo-list",
                element: <ZustandTodoList />,
            },
            {
                path: "redux-todo-list",
                element: <ReduxTodoList />,
            },
        ],
    },
])

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router
