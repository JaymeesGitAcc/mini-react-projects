import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import ZustandTodoList from "./components/TodoList-Zustand/ZustandTodoList"
import ReduxTodoList from "./components/TodoList-Redux/ReduxTodoList"
import Boxes from "./components/Boxes/Boxes"
import CommentSection from "./components/CommentSection/CommentSection"
import { comments } from "./data/comments.js"
import NestedCircles from "./components/NestedCircles/NestedCircles.jsx"
import CheckBoxes from "./components/DynamicCheckboxCounter/CheckBoxes.jsx"
import TrafficLightSystem from "./components/traffic-light-system/TrafficLightSystem.jsx"
import DataTransferBox from "./components/DataTransfer/DataTransferBox.jsx"
import PasswordGenerator from "./components/password-generator/PasswordGenerator.jsx"
import CustomModal from "./components/custom-modal/CustomModal.jsx"

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
                path: "redux-todo-list",
                element: <ReduxTodoList />,
            },
            {
                path: "checkboxes-counter",
                element: <CheckBoxes />,
            },
            {
                path: "traffic-light-system",
                element: <TrafficLightSystem />,
            },
            {
                path: "data-transfer",
                element: <DataTransferBox />,
            },
            {
                path: "password-generator",
                element: <PasswordGenerator />,
            },
            {
                path: "custom-modal",
                element: <CustomModal />,
            },
        ],
    },
])

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router
