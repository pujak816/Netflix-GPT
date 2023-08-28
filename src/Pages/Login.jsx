import React, { useState, useRef, useEffect } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if (message) return; // if error message is there return from here

    if (!isSignInForm) {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/AAcHTtdK3o-bpOVUTFmnjZLLlAYERo6Y41eN28aBJ2AMYXrTOxzY=s324-c-no",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-16 bg-black/80 w-1/3 my-24 mx-auto left-0 right-0 text-white"
      >
        <h1 className=" text-3xl font-bold mb-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-2 py-1 px-2 w-full rounded-md bg-gray-700"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 py-1 px-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="w-full  my-2 py-1 px-2 rounded-md bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>

        {/* submit button */}
        <button
          className="bg-red-600 w-full  my-6 py-1 rounded-md"
          onClick={handleButtonClick}
        >
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
      </form>
    </>
  );
};

export default Login;
