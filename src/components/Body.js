import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import Login from "./Login";
import Browse from "./Browse";
import { addUser, removeUser } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(
          addUser({
            email: user.email,
            displayName: user.displayName,
            id: user.uid,
            photoURL: user.photoURL,
          })
        );

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/Browse", element: <Browse /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
