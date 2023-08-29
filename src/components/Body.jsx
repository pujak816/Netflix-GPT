// import Login from "./Login";
// import Browse from "../Pages/Browse";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Body = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //       navigate("/browse");
  //     } else {
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <>
      <Header />
      <Outlet />

      {/* <RouterProvider router={appRouter} /> */}
    </>
  );
};

export default Body;
