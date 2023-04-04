import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllHotels from "./pages/AllHotels/AllHotels";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import AllUsers from "./pages/Admin/AllUsers";
import AddHotels from "./pages/Admin/AddHotels";
import AddedHotels from "./pages/Admin/AddedHotels";
import Dashboard from "./pages/Admin/Dashboard";
import AddRooms from "./pages/Admin/AddRooms";
import AllRooms from "./pages/Admin/AllRooms";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import CheckOut from "./pages/CheckOut/CheckOut";

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
          loader: () => fetch("http://localhost:5000/hotels"),
          element: <AllHotels />,
        },
        {
          path: "/hotels/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/hotels/${params.id}`),
          element: <HotelDetail />,
        },
        {
          path: "/payment",
          element: <CheckOut />,
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
              loader: () => fetch("http://localhost:5000/users"),
              element: <AllUsers />,
            },
            {
              path: "/admin/addHotels",
              element: <AddHotels />,
            },
            {
              path: "/admin/addedHotels",
              loader: () => fetch("http://localhost:5000/hotels"),
              element: <AddedHotels />,
            },
            {
              path: "/admin/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/admin/addRoom",
              loader: () => fetch("http://localhost:5000/hotelName"),
              element: <AddRooms />,
            },
            {
              path: "/admin/allRooms",
              loader: () => fetch("http://localhost:5000/rooms"),
              element: <AllRooms />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
