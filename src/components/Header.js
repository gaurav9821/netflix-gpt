import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
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
      {user && (
        <div className="flex">
          <img
            className="w-12 h-12 cursor-pointer rounded-sm"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="user-icon"
          />
          <button onClick={handleSignOut} className="m-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
