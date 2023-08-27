import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <header className="absolute z-10 px-32 py-2 bg-gradient-to-b from-black flex w-full justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-40"
        />
        <div className="text-white flex gap-6 font-semibold my-5">
          <button className="bg-transparent border border-white px-5 py-1 rounded-md ">
            🌐 English
          </button>
          <button className="bg-red-600 px-4 py-1 rounded-md">Sign In</button>
        </div>
      </header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-16 bg-black/80 w-1/3 my-24 mx-auto left-0 right-0 text-white ">
        <h1 className=" text-3xl font-bold mb-5 m-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* <div className=""> */}
        <input
          type="text"
          placeholder="Email Address"
          className="m-1 my-2 py-1 px-2 w-full rounded-md bg-gray-700"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="m-1 my-2 py-1 px-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="password"
          placeholder="password"
          className="w-full m-1 my-2 py-1 px-2 rounded-md bg-gray-700"
        />
        <button className="bg-red-600 w-full m-1 my-6 py-1 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="flex gap-1">
          <span className="text-gray-400">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}
          </span>
          <span onClick={toggleSignInForm} className="cursor-pointer ">
            {isSignInForm ? "Sign up now." : "Sign In"}
          </span>
        </p>

        {/* </div> */}
      </form>
    </>
  );
};

export default Login;
