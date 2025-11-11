import React, { use } from "react";
import logo from "../assets/logo__2_-removebg-preview.png";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import { TbMoodEmpty } from "react-icons/tb";
import { FaPersonWalking } from "react-icons/fa6";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged Out Successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Failed to Log out!");
      });
  };
  // console.log(user);
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
              className="menu menu-sm dropdown-content bg-green-50 rounded-box z-1 mt-3 w-52 p-2 shadow text-green-900 font-semibold"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/events">Upcoming Events</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex items-center gap-1 cursor-pointer">
              <img
                className=" rounded-full w-[60px] h-[60px]"
                src={logo}
                alt="logo"
              />
              <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-linear-to-r from-green-600 to-teal-800">
                {" "}
                Green Event
              </h1>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex items-center ">
          <ul className=" menu-horizontal px-1 text-lg gap-5 text-green-900 font-semibold">
            <li className="hover:scale-105 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-300 rounded-full px-5">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="hover:scale-105 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-300 px-5 rounded-full">
              <NavLink to="/events">Upcoming Events</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-15 rounded-full"
                  src={user.photoURL}
                  alt="image"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <p className="text-green-700 font-semibold">
                    {user.displayName}
                  </p>
                </li>
                <li>
                  <p className="text-green-700 font-semibold">{user.email} </p>
                </li>
                <li>
                  <Link to="/create-event">Create Events</Link>
                </li>
                <li>
                  <Link to="/manage-event">Manage Events</Link>
                </li>
                <li>
                  <Link to="/joined-events">Join Events</Link>
                </li>
                <li>
                  <a>Profile</a>
                </li>

                <li>
                  <p onClick={handleLogOut} className="text-red-700">
                    Log Out{" "}
                    <span>
                      <FaPersonWalking size={22} />
                    </span>{" "}
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-green-600 hover:bg-green-700 hover:scale-105 transition ease-in-out duration-300 text-white rounded-full hidden px-5 lg:flex"
            >
              Log Out
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-full px-5">
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
