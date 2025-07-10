import React from "react";
import AuthNavBar from "./AuthNavBar";
import { Link } from "react-router-dom";

const Signup = () => {
  
  return (
    <div className="">
      <AuthNavBar />
      <div className="max-w-7xl m-auto mt-10">
        <div className="h-[80vh]  px-5 flex items-center flex-col gap-8 justify-center">
          <div className="text-center space-y-1">
            <h3 className="font-bold text-3xl ">Create an account</h3>
            <p className="text-gray-600">
              Enter your information to get started
            </p>
          </div>

          <form className="text-gray-600 flex flex-col gap-3 w-[400px]">
            <div className="">
              <label htmlFor="fullName">Full Name</label>
              <input
                className="border outline py-1 px-2 rounded w-full mt-1"
                type="text"
                id="fullName"
                required
              />
            </div>

            <div className="">
              <label htmlFor="email">Email</label>
              <input
                className="border outline py-1 px-2 rounded w-full mt-1"
                type="email"
                id="email"
                required
              />
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <input
                className="border outline py-1 px-2 rounded w-full mt-1"
                type="password"
                id="password"
                required
              />
            </div>

            <div className="">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="border outline py-1 px-2 rounded w-full mt-1"
                type="password"
                id="confirmPassword"
                required
              />
            </div>

            <div className="text-center space-y-2">
              <button
                type="submit"
                className="bg-white mt-6 w-full text-black px-7 border py-1.5 rounded-sm cursor-pointer hover:bg-gray-700 hover:text-amber-100 transition"
              >
                Create Account
              </button>
              <p>
                Already have an account?
                <Link to="/login" className="cursor-pointer hover:underline">
                  sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
