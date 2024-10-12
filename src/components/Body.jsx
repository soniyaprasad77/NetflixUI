import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import Browse from "./Browse";
import Login from "./Login";
import MovieDetails from "./MovieDetails";
import GeminiSearchPage from "./GeminiSearchPage";

const Body = () => {
  const movie = useSelector((store) => store.movies);
  // console.log(movie);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "/browse/movie/:movieId",
          element: (
            <MovieDetails />
          ),
        },
      ],
    },
    {
      path: "/search",
      element: <GeminiSearchPage />
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
