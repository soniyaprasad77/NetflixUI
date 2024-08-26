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
  
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/Browse", element: <Browse /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
