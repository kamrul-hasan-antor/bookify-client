import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllHotels from "./pages/AllHotels/AllHotels";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import HotelDetails from "./pages/HotelDetail/HotelDetail";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

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
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
