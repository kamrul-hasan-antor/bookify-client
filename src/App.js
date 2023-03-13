import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllHotels from "./pages/AllHotels/AllHotels";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import HotelDetails from "./pages/HotelDetail/HotelDetail";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hotels",
          element: <AllHotels />,
        },
        {
          path: "/details/:id",
          element: <HotelDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
