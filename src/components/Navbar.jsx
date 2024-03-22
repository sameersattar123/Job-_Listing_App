import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo (3).png";

const Navbar = () => {
  return (
    <nav class="bg-indigo-700 border-b border-indigo-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <img class="h-10 w-auto" src={logo} alt="React Jobs" />
            <NavLink classna="flex flex-shrink-0 items-center mr-4" to="/">
              <span class="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
