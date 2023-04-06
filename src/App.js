import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllHotels from "./pages/AllHotels/AllHotels";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Dashboard/Admin";
import AllUsers from "./pages/Dashboard/Admin/AllUsers";
import AddHotels from "./pages/Dashboard/Admin/AddHotels";
import AddedHotels from "./pages/Dashboard/Admin/AddedHotels";
import AddRooms from "./pages/Dashboard/Admin/AddRooms";
import AllRooms from "./pages/Dashboard/Admin/AllRooms";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import CheckOut from "./pages/CheckOut/CheckOut";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AllBookings from "./pages/Dashboard/Admin/AllBookings";
import MyBookings from "./pages/Dashboard/User/MyBookings";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const { user } = useContext(AuthContext);

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
          element: (
            <ProtectedRoute>
              <HotelDetail />
            </ProtectedRoute>
          ),
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
          element: <Admin />,
          children: [
            {
              path: "/admin/allUsers",
              loader: () => fetch("http://localhost:5000/users"),
              element:
                user?.email === "kamrulhasan.antor95@gmail.com" ? (
                  <AllUsers />
                ) : (
                  <NotFound />
                ),
            },
            {
              path: "/admin/addHotels",
              element:
                user?.email === "kamrulhasan.antor95@gmail.com" ? (
                  <AddHotels />
                ) : (
                  <NotFound />
                ),
            },
            {
              path: "/admin/addedHotels",
              loader: () => fetch("http://localhost:5000/hotels"),
              element:
                user?.email === "kamrulhasan.antor95@gmail.com" ? (
                  <AddedHotels />
                ) : (
                  <NotFound />
                ),
            },
            {
              path: "/admin/allBookings",
              element:
                user?.email === "kamrulhasan.antor95@gmail.com" ? (
                  <AllBookings />
                ) : (
                  <NotFound />
                ),
            },

            {
              path: "/admin/addRoom",
              loader: () => fetch("http://localhost:5000/hotelName"),
              element:
                user?.email === "kamrulhasan.antor95@gmail.com" ? (
                  <AddRooms />
                ) : (
                  <NotFound />
                ),
            },
            {
              path: "/admin/allRooms",
              loader: () => fetch("http://localhost:5000/rooms"),
              element:
                user?.email === "kamrulhasan.antor95@gmail.com" ? (
                  <AllRooms />
                ) : (
                  <NotFound />
                ),
            },
            {
              path: "/myBookings",
              // loader: () => fetch("http://localhost:5000/rooms"),
              element: <MyBookings />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
