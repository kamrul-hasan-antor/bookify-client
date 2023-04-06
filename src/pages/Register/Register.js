import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const phoneNumber = form.phoneNumber.value;
    const age = form.age.value;
    const gender = form.gender.value;

    const user = {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      gender,
    };
    console.log(user);
    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: firstName + " " + lastName,
          phoneNumber: phoneNumber,
        });

        fetch("http://localhost:5000/addUsers", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            form.reset();
          });
        form.reset();
        navigate(from, { replace: true });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-max w-11/12 lg:w-1/2 pt-28 lg:w- max-w-screen-md mx-auto ">
      <div className="border p-3 py-8 rounded-sm bg-white shadow-md">
        <form onSubmit={handleRegisterUser} className="w-full">
          <h4 className="mb-3 font-semibold text-2xl lg:text-3xl pb-3 uppercase text-center">
            Register Now
          </h4>
          {/* Name */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                first Name
              </label>
              <input
                className="appearance-none block w-full border rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
                id="grid-first-name"
                type="text"
                placeholder="Mrs. Janee Haz"
                name="firstName"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase  text-sm font-semibold mb-2"
                htmlFor="grid-lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
                id="grid-lastName"
                type="text"
                name="lastName"
                placeholder="123-456-7890"
              />
            </div>
          </div>

          {/* Eamil and Password */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
                id="grid-email"
                type="email"
                name="email"
                placeholder="janedoa@gmail.com"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
                id="grid-password"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
          </div>

          {/* phone, age, gender */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-phone"
              >
                phone number
              </label>
              <input
                className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none  focus:border-[#1c3c6b]"
                id="grid-phone"
                type="text"
                name="phoneNumber"
                placeholder="01912345678"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-3">
              <label
                className="block uppercase   text-sm font-semibold mb-2"
                htmlFor="grid-gender"
              >
                Gender
              </label>

              <select
                id="grid-gender"
                className="bg-gray-50 p-3 w-full  border border-gray-200 rounded px-4 focus:outline-none  focus:border-[#1c3c6b] "
                name="gender"
                required
              >
                <option disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-3">
              <label
                className="block uppercase  text-sm font-semibold mb-2"
                htmlFor="grid-age"
              >
                age
              </label>
              <input
                className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none  focus:border-[#1c3c6b]"
                id="grid-age"
                type="text"
                name="age"
                placeholder="25"
              />
            </div>
          </div>
          <div className="mb-3 text-center">
            Already have an account?{" "}
            <Link className="underline" to="/login">
              Login Now
            </Link>
          </div>
          <div className="flex items-end mt-3 lg:mt-0">
            <button
              type="submit"
              className="bg-[#1c3c6b] text-white py-3 rounded font-semibold w-full lg:w-1/2 mx-auto uppercase"
            >
              register now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
