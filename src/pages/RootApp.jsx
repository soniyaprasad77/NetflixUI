import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Browse from "./Browse";
import Login from "./Login";
import MovieDetails from "./MovieDetails";
import GeminiSearchPage from "./GeminiSearchPage";
import PrivateRoutes from "./PrivateRoutes";

const RootApp = () => {
  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: (
        <Browse />
      ),
      children: [
        {
          path: "/browse/movie/:movieId",
          element: <MovieDetails />,
        },
      ],
    },
    {
      path: "/search",
      element: (
        <GeminiSearchPage />
      ),
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default RootApp;
