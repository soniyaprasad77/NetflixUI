import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <PrivateRoutes>
          <Browse />
        </PrivateRoutes>
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
        <PrivateRoutes>
          <GeminiSearchPage />
        </PrivateRoutes>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default RootApp;
