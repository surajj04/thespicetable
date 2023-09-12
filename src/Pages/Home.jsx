import React from 'react'
import './home.style.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function Home() {
    return (
        <div>
            <>
                <div className="bg-img">
                    <div className="text-white mx-[4rem] max-sm:mx-[2rem] justify-center title-banner  pt-[20rem] max-sm:pt-[12rem]">
                        <h2 className="text-6xl title-font max-sm:text-3xl">
                            The spice table
                        </h2>
                        <p className="text-xl mt-5 max-sm:text-sm max-sm:mt-1">Quality Products Hawaiian Flavours</p>
                        <div className="mt-6 max-sm:mx-0">
                            <NavLink
                                className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md max-sm:text-xs"
                                to="/order"
                            >
                                Order Online
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-4 max-sm:block max-sm:mx-4 py-8 max-sm:py-0 bg-gray-950 text-white">
                        <div className="max-sm:block hidden">
                            <div className="mx-4">
                                <img
                                    className=" rounded-md max-sm:max-w-full my-10"
                                    src="img/food/breakfast.jpg"
                                    alt="breakfast"
                                />
                            </div>
                        </div>
                        <div className="mx-auto w-4/5 max-sm:w-full">
                            <h2 className="text-5xl  max-sm:text-4xl">Eat</h2>
                            <p className="my-4">Breakfast, Lunch and Dinner</p>
                            <p className="text-sm font-sans max-sm:text-xs">
                                A restaurant is a place where you can eat a meal and pay for it.In
                                restaurants, your food is usually served to you at your table by a
                                waiter or waitress. The restaurant serves breakfast, lunch, and
                                dinner. The food at the restaurant was good and the waiters were
                                polite.
                            </p>
                            <div className="my-7">
                                <a className="px-4 py-2 bg-white text-black rounded-md max-sm:text-xs" href="#">
                                    See More
                                </a>
                            </div>
                        </div>
                        <div className="max-sm:hidden">
                            <div className="mx-4">
                                <img className=" rounded-md w-[90%]" src="img/food/breakfast.jpg" alt="breakfast image" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-8 max-sm:block max-sm:mx-4 bg-gray-950 text-white">
                        <div>
                            <div className="mx-4">
                                <img
                                    className="rounded-md max-sm:max-w-full  w-[90%]"
                                    src="img/food/tea.jpeg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mx-auto w-4/5 max-sm:w-full">
                            <h2 className="text-5xl  max-sm:text-4xl ">Drink</h2>
                            <p className="my-4">The Freshest Cup in Town</p>
                            <p className="text-sm font-sans">
                                A chaihouse, tea shop, or café is an establishment that primarily
                                serves various types of coffee, espresso, latte, and cappuccino. Some
                                coffeehouses may serve cold drinks, such as iced coffee and iced tea,
                                as well as other non-caffeinated beverages.
                            </p>
                            <div className="my-7">
                                <a className="px-4 py-2 bg-white text-black rounded-md max-sm:text-xs" href="#">
                                    See More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-900 shadow mt-10 max-sm:w-full">
                    <div className="w-full mx-auto max-w-screen-xl max-sm:text-center   p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center ">
                            © 2023{" "}
                            <a href="/" className="hover:underline">
                                Kitchen™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center max-sm:justify-center mt-3 text-sm font-medium text-gray-500  sm:mt-0 ">
                            <li>
                                <a href="/about.html" className="mr-4 hover:underline md:mr-6  ">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="/contact.html" className="hover:underline ">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </>

        </div>
    )
}
