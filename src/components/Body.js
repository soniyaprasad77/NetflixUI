import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/Browse", element: <Browse /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
