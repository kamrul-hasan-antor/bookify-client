import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllHotels from "./pages/AllHotels/AllHotels";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import HotelDetails from "./pages/HotelDetail/HotelDetail";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import AllUsers from "./pages/Admin/AllUsers";
import AddHotels from "./pages/Admin/AddHotels";

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
        {
          path: "/admin",
          element: <Admin />,
          children: [
            {
              path: "/admin/allUsers",
              element: <AllUsers />,
            },
            {
              path: "/admin/addHotels",
              element: <AddHotels />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
