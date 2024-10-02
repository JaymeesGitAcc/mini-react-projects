import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

const listItems = [
    {
        name: "Todo List using Zustand",
        path: "/",
    },
    {
        name: "Rotate Boxes",
        path: "/boxes",
    },
    {
        name: "Comment Section",
        path: "/comment-section",
    },
    {
        name: "Circles",
        path: "/nested-circles",
    },
    {
        name: "Todo List using Redux",
        path: "/redux-todo-list",
    },
    {
        name: "Dynamic Checkboxes Counter",
        path: "/checkboxes-counter",
    },
    {
        name: "Traffic Light system",
        path: "/traffic-light-system",
    },
    {
        name: "Data Transfer System",
        path: "/data-transfer",
    },
]

const Menu = () => {
    const { pathname } = useLocation()

    return (
        <nav className="min-h-screen w-[260px] p-4">
            <h1>Projects - </h1>
            <ul>
                {listItems.map((item) => (
                    <li
                        key={item.name}
                        className={`my-2 ${
                            pathname === item.path
                                ? "bg-blue-500 text-white"
                                : ""
                        }`}
                    >
                        <Link to={item.path} className="block p-2">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const Home = () => {
    return (
        <div className="flex">
            <Menu />
            <div className="min-h-screen grow bg-slate-800 flex justify-center items-center">
                <Outlet />
            </div>
        </div>
    )
}

export default Home
