import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { CrossIcon } from "../utils/svgConstants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  function toggleSignIn() {
    setIsSignedInForm(!isSignedInForm);
    setErrMessage(null);
  }
  //Create a reference for email,password and full name input and give back a current object
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  function handleClick() {
    /*
    This will give reference of email,password input HTML tag inside current object
    console.log(emailRef);
    console.log(passwordRef);

    To access the value of input element we have to go inside current object and access value key
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    */
    const message = checkValidate(
      emailRef.current.value,
      passwordRef.current.value,
      fullNameRef?.current?.value
    );
    // console.log(message);
    setErrMessage(message);

    //Sign In and Sign Up Logic
    if (message !== null) {
      return;
    } else {
      if (!isSignedInForm) {
        //Sign Up Logic

        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "--" + errorMessage);
            setErrMessage(errorCode + "--" + errorMessage);
          });
      } else {
        //Sign In Logic
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "--" + errorMessage);
            if (
              errorCode.includes("invalid-credential") ||
              errorMessage.includes("invalid-credential")
            ) {
              // console.log(er);
              setErrMessage(
                "There is no user with this email id or please check the password"
              );
            }
          });
      }
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[30%] my-36 p-14 bg-black mx-auto right-0 left-0 text-white bg-opacity-80 rounded-[4px]"
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            ref={fullNameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-transparent rounded-[3px] border border-gray-500 focus:outline-none focus:border-white focus:border-[3px] transition duration-300 "
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-transparent rounded-[3px] border border-gray-500 focus:outline-none focus:border-white focus:border-[3px] transition duration-300"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-transparent rounded-[3px] border border-gray-500 focus:outline-none focus:border-white focus:border-[3px] transition duration-300"
        />
        {errMessage !== null && (
          <div className="flex items-center text-red-600 my-2">
            <CrossIcon />
            <p className="mx-1">{errMessage}</p>
          </div>
        )}
        <button
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 p-2 my-4 w-full rounded-[3px]"
        >
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="my-4">
          <span className="opacity-70 ">
            {isSignedInForm ? "New to Netflix? " : "Already Registered? "}
          </span>
          <span
            onClick={toggleSignIn}
            className="cursor-pointer hover:underline"
          >
            {isSignedInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
