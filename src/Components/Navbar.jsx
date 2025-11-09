import React, { use } from "react";
import logo from "../assets/logo__2_-removebg-preview.png";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";
const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="shadow-sm bg-green-50">
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-green-50 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Upcoming Events</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Gallery</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              className=" rounded-full w-[60px] h-[60px]"
              src={logo}
              alt="logo"
            />
            <a className="font-bold text-2xl text-green-800"> Green Event</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 text-lg gap-5">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Upcoming Events</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-15">
                {user ? (
                  <img
                    className="w-15 rounded-full"
                    alt="user"
                    src={user.photoURL}
                  />
                ) : (
                  <p>No image</p>
                )}
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Create Events</a>
              </li>
              <li>
                <a>Manage Events</a>
              </li>
              <li>
                <a>Join Events</a>
              </li>
              <li>
                <a>Profile</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          {user ? (
            <button className="btn bg-green-900 text-white rounded-xl">
              Log Out
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-green-900 text-white rounded-xl">
                Log In
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
