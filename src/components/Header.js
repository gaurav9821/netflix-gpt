import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ isSignedInForm, setIsSignedInForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-48 cursor-pointer"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user ? (
        <div className="flex" onClick={() => setIsOpen(!isOpen)}>
          <img
            className="w-12 h-12 cursor-pointer rounded-sm"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="user-icon"
          />
          {isOpen && (
            <div className="bg-black/95 absolute z-50 right-0 top-10 min-w-[170px] pt-2 border border-gray-900 rounded-md my-12 mr-6">
              <a
                href="#!"
                className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
              >
                <div className="w-5 h-5 bg-cyan-500"></div>
                <div className="title">Gaurav</div>
              </a>
              <a
                href="#!"
                className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
              >
                <div className="w-5 h-5 bg-green-500"></div>
                <div className="title">Child</div>
              </a>

              <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
                <button className="p-3" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link
            onClick={() => setIsSignedInForm(!isSignedInForm)}
            to="/login"
            className="block mr-14 bg-red-600 px-5 py-2 text-white rounded-sm"
          >
            {isSignedInForm ? "Sign Up " : "Sign In "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
