import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Loader from "../components/Loader";
import { AuthContext } from "../context/AuthContext";

const LogIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [checkPass, setCheckPass] = useState("");
  const emailRef = useRef();
  const { loginWithEP, setUser, loading, setLoading, createUserWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // if (loading) {
  //   return <Loader />;
  // }
  // log in func
  //
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setCheckPass(password);
    const passRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (password)
      if (!passRegEx.test(password)) {
        toast.error(
          "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
        );
        return;
      }
    loginWithEP(email, password)
      .then(() => {
        toast.success("Log In Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast.error(errorMessage);
      });
  };
  //

  //google sign in func
  //
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    if (loading) {
      return <Loader />;
    }
    createUserWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign In Successfully");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.meesage);
      });
  };
  return (
    <div>
      <div className="hero  min-h-screen bg-linear-to-tl bg-green-900 from-teal-100 dark:bg-gray-800">
        <div className="card bg-green-50 w-full max-w-sm shrink-0 shadow-2xl dark:bg-gray-800">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold text-green-900 dark:text-green-500">
              Pleaase Log In!
            </h1>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <div className="relative">
                <label className="label">Password</label>

                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-[25px] top-[30px] cursor-pointer z-50"
                >
                  {showPass ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
              {/* pass error sec */}
              <div>
                {checkPass?.length > 0 && checkPass?.length < 6 && (
                  <p className="text-red-500 text-sm mt-2">
                    Password must be at least 6 characters long and include at
                    least one uppercase letter, one lowercase letter, one
                    number, and one special character
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white text-[16px] font-semibold px-6 py-2 rounded-lg text-center mt-4"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn mt-2 hover:border-2  bg-white text-black hover:border-green-600"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign In with Google
              </button>
            </form>
            <div>
              <p className="">
                Don't have an account?{" "}
                <Link
                  to="/registration"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
