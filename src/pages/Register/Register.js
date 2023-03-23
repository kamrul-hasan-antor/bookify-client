import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import travel from "../../images/signup.png";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const nid = form.nid.value;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;
    const photo = form.photo.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const phoneNumber = form.phoneNumber.value;

    const user = {
      fullName,
      photo,
      email,
      phoneNumber,
      nid,
      address,
      age,
      gender,
      password,
    };
    console.log(user);
    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: photo,
          phoneNumber: phoneNumber,
        });
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-max w-11/12 lg:w-5/6 pt-28 lg:w- max-w-screen-xl mx-auto ">
      <div className="flex border p-3 rounded-sm">
        <div className="hidden lg:block lg:w-1/2 pr-3 border-r border-slate-300">
          <img className="w-full h-full" src={travel} alt="" />
        </div>

        <form onSubmit={handleRegisterUser} className="w-full lg:w-1/2 lg:pl-3">
          <h4 className="mb-3 font-semibold text-2xl lg:text-3xl pb-3 uppercase text-center">
            Register Now
          </h4>
          {/* Name and NID */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full border border-red-500 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
                id="grid-first-name"
                type="text"
                placeholder="Janee"
                name="fullName"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase  text-sm font-semibold mb-2"
                htmlFor="grid-nid"
              >
                National ID
              </label>
              <input
                className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
                id="grid-nid"
                type="text"
                name="nid"
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
                className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
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
                className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
                id="grid-password"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
          </div>

          {/* Image and Address */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3  mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
                id="grid-address"
                type="text"
                name="address"
                placeholder="52/A, Stadium, Mymensingh"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-img"
              >
                Image
              </label>
              <input
                className="file:overflow-hidden file:border-0 file:bg-gray-100 file:px-4 file:py-[11px] block w-full border rounded focus:outline-none bg-white focus:border-[#1c3c6b]"
                type="file"
                name="photo"
                id="grid-img"
                accept="image/*"
                multiple
              />
            </div>
          </div>
          {/* phone, img, gender */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3 mb-3">
              <label
                className="block uppercase text-sm font-semibold mb-2"
                htmlFor="grid-phone"
              >
                phone number
              </label>
              <input
                className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
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
                className="bg-gray-50 p-3 w-full  border border-gray-200 rounded px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b] "
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
                className="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
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