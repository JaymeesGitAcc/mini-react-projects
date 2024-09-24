import React, { useEffect } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

const listItems = [
    {
        name: "Todo List using Zustand",
        path: "/zustand-todo-list",
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
            <div className="grow bg-slate-800">
                <Outlet />
            </div>
        </div>
    )
}

export default Home
