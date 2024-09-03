import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/Browse", element: <Browse /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
