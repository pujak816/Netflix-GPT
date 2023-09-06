import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLoginChange = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute z-10 sm:px-14 sm:py-2 bg-black md:bg-transparent bg-gradient-to-b from-black flex w-full justify-between">
      <img src={LOGO} alt="logo" className="w-24 h-10 sm:w-40 sm:h-auto" />
      {!user && (
        <button className="bg-transparent border border-white sm:px-5 sm:py-1 rounded-md  text-white gap-6 font-semibold  text-xs my-3 sm:my-6">
          🌐
          <select onChange={handleLanguageChange} className="bg-transparent">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="text-black"
              >
                {lang.name}
              </option>
            ))}
          </select>
        </button>
      )}

      {user && (
        <div className="flex items-center gap-2 sm:gap-6 font-semibold text-[8px] sm:text-base sm:my-5 pr-2">
          <button
            className="px-[5px] py-[1px] sm:px-4 sm:py-1 my-2 bg-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "SearchGPT"}
          </button>
          <button
            onClick={handleLoginChange}
            className="bg-red-600 px-[5px] py-[1px] sm:px-4 sm:py-1 my-2 rounded-md"
          >
            Sign Out
          </button>
          <img
            src={user?.photoURL}
            alt="img"
            className="bg-orange-500 w-5 h-5 sm:w-8 sm:h-auto"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
