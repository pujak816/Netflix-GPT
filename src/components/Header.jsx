import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLoginChange = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
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
        {user && (
          <>
            <img
              src={user?.photoURL}
              alt="img"
              className="bg-orange-500 rounded-full w-8 "
            />
            <button
              onClick={handleLoginChange}
              className="bg-red-600 px-4 py-1 rounded-md"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
