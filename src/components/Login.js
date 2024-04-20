import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  function toggleSignIn() {
    setIsSignedIn(!isSignedIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-3/12 my-36 p-10 bg-black mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-transparent rounded-[3px] border border-gray-500 focus:border-white focus:border-2 transition duration-300"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-transparent rounded-[3px] border border-gray-500 focus:border-white focus:border-2 transition duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-transparent rounded-[3px] border border-gray-500 focus:border-white focus:border-2 transition duration-300"
        />
        <button className="bg-red-700 hover:bg-red-800 p-2 my-4 w-full rounded-[3px]">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="my-4">
          <span className="opacity-70 ">
            {isSignedIn ? "New to Netflix? " : "Already Registered? "}
          </span>
          <span
            onClick={toggleSignIn}
            className="cursor-pointer hover:underline"
          >
            {isSignedIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
