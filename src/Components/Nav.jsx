import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
                    {/* Left: Logo */}
                    <div className="flex items-center space-x-2">
                        <NavLink to={"/"}>
                            <span className="text-blue-600 text-xl sm:text-2xl font-bold">Back</span>
                            <span className="hidden sm:inline text-sm text-gray-500">
                                End{" "}
                                <span className="text-yellow-500 font-semibold">Project</span>
                                <sup className="text-yellow-500">✹</sup>
                            </span>
                        </NavLink>
                    </div>

                    {/* Middle: Search Bar */}
                    <div className="flex-1 mx-4 w-full sm:w-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for Products, Brands and More"
                                className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {/* Search icon can be added here */}
                        </div>
                    </div>

                    {/* Right: Icons and Links */}
                    <div className="flex flex-wrap items-center justify-end space-x-4 mt-4 sm:mt-0">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                                <NavLink to={"/Product"}>Product</NavLink>
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                                <NavLink to={"/Create"}>Create</NavLink>
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                                <NavLink to={"/Signin"}>Signin</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav