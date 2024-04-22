import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative text-gray-500 min-h-screen">
      <div className="absolute -z-[1] min-h-screenf h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="NetflixGPT"
          className="w-screen h-full object-cover"
        />
      </div>
      <Header />
      {/* <div className="flex bg-black/60 justify-between items-center">
        <img
          className="w-48 p-5 cursor-pointer"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div> */}

      <div className="flex items-center min-h-screen bg-black/60 pt-[70px]">
        <div className="px-4 md:px-24 py-6 text-white text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl m-auto md:leading-[60px]">
            The biggest Indian hits. Ready to watch here from ₹ 149.
          </h1>
          <h3 className="text-1xl md:text-2xl my-4 text-gray-50">
            Join Today. Cancel Anytime.
          </h3>
          <h3 className="md:text-2xl my-4 mb-5">
            Ready to watch? Get Started to create or restart your membership.
          </h3>
          <div className="mt-4">
            <Link
              to="/login"
              className="inline-block bg-red-600 px-12 py-4 text-white rounded-sm"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
