import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        form.reset();
        setLoginError("");
        navigate(from, { replace: true });
      })
      .catch((err) => setLoginError(err.message));
  };

  return (
    <div className="h-max w-11/12 lg:w-1/3 pt-28 lg:w- max-w-screen-sm mx-auto">
      <div className="border py-8 p-3 rounded-sm bg-white shadow-md">
        <form onSubmit={handleLogin} className="w-full">
          <h4 className="mb-3 font-semibold text-2xl lg:text-3xl pb-3 uppercase text-center">
            Login Now
          </h4>

          {/* Eamil and Password */}

          <div className="w-full mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-email"
              name="email"
              type="email"
              placeholder="janedoa@gmail.com"
              required
            />
          </div>
          <div className="w-full mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-password"
              type="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <div>
            <p className="text-center text-red-700">
              {!loginError
                ? ""
                : loginError.substring(22, loginError.length - 2)}
            </p>
          </div>
          <div className="mb-3 text-center">
            Don't have an account?{" "}
            <Link className="underline" to="/register">
              Register Now
            </Link>
          </div>
          <div className="flex items-end mt-3 lg:mt-0">
            <button
              type="submit"
              className="bg-[#1c3c6b] text-white py-3 rounded font-semibold w-full lg:w-1/2 mx-auto uppercase"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
