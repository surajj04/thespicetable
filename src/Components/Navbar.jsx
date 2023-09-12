import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../App.css'

export default function Navbar(props) {
    const openMenu = () => {
        const ele = document.getElementById("navbar-phone");
        if (ele.style.display === "none") {
            ele.style.display = "block"
        } else {
            ele.style.display = "none"
        }
    }
    return (
        <div>
            <nav className={`fixed w-full border-gray-200   bg-transparent text-white z-10`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="self-center text-xl  whitespace-nowrap  max-sm:text-xl title-font">
                            The Spice Table
                        </span>
                    </a>
                    <div className="flex md:order-2">

                        <NavLink
                            type="button"
                            className="md:hidden  flex mr-3 text-sm my-auto rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                            to='/registrations'
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                alt="user photo"
                            />
                        </NavLink>

                        <NavLink to="/registrations">
                            <div className="relative hidden md:block">
                                <button
                                    type="button"
                                    className="  flex mr-3 text-sm my-auto rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                        alt="user photo"
                                    />
                                </button>
                            </div>
                        </NavLink>



                        <button
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            onClick={openMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>

                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
                        id="navbar-phone"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:flex-row md:space-x-8 md:mt-0 text-white bg-gray-950 md:bg-transparent">
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 md:hover:text-red-500 md:hover:underline"
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-red-500 md:hover:underline  md:p-0 "
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/menu"
                                    className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:hover:text-red-500 md:hover:underline md:p-0 "
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/order"
                                    className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:hover:text-red-500 md:hover:underline md:p-0 "
                                >
                                    Order Online
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
