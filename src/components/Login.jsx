import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

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
            photoURL: USER_AVATAR,
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
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black/40 h-screen ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-2 sm:p-16 bg-black/80 w-2/3 lg:w-1/3 my-28 mx-auto left-0 right-0 text-white"
      >
        <h1 className="text-lg sm:text-3xl font-bold mb-1 sm:mb-5 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="text-xs sm:text-base sm:my-2 py-1 px-3 my-1 w-full rounded-md bg-gray-700"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="text-xs sm:text-base sm:my-2 py-1 px-3 my-1  w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="text-xs sm:text-base sm:my-2 py-1 px-3 my-1  w-full rounded-md bg-gray-700"
        />
        <p className="text-red-500 ">{errorMessage}</p>

        {/* submit button */}
        <button
          className="bg-red-600 w-full text-xs sm:text-base my-3 sm:my-6 py-1 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="flex gap-1">
          <span className="text-gray-400 text-xs sm:text-base">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}
          </span>
          <span
            onClick={toggleSignInForm}
            className="cursor-pointer text-xs sm:text-base"
          >
            {isSignInForm ? "Sign up now." : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
