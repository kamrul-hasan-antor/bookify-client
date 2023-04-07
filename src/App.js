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
import AdminRoute from "./ProtectedRoute/AdminRoute";
import EditRooms from "./pages/Dashboard/Admin/EditRooms";
import UpdateHotels from "./pages/Dashboard/Admin/Update/UpdateHotels";

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
              element: (
                <AdminRoute path="/admin/allUsers">
                  <AllUsers />
                </AdminRoute>
              ),
            },
            {
              path: "/admin/addHotels",
              element: (
                <AdminRoute path="/admin/addHotels">
                  <AddHotels />,
                </AdminRoute>
              ),
            },
            {
              path: "/admin/addedHotels",
              loader: () => fetch("http://localhost:5000/hotels"),
              element: (
                <AdminRoute path="/admin/addedHotels">
                  <AddedHotels />
                </AdminRoute>
              ),
            },
            {
              path: "/admin/updateHotels/:id",
              loader: ({ params }) =>
                fetch(`http://localhost:5000/hotels/${params.id}`),
              element: (
                <AdminRoute path="/admin/updateHotels/:id">
                  <UpdateHotels />
                </AdminRoute>
              ),
            },
            {
              path: "/admin/allBookings",
              element: (
                <AdminRoute path="/admin/allBookings">
                  <AllBookings />
                </AdminRoute>
              ),
            },

            {
              path: "/admin/addRoom",
              loader: () => fetch("http://localhost:5000/hotelName"),
              element: (
                <AdminRoute path="/admin/addRoom">
                  <AddRooms />
                </AdminRoute>
              ),
            },
            {
              path: "/admin/allRooms",
              loader: () => fetch("http://localhost:5000/rooms"),
              element: (
                <AdminRoute path="/admin/allRooms">
                  <AllRooms />
                </AdminRoute>
              ),
            },
            {
              path: "admin/editRoom/:id",
              loader: ({ params }) =>
                fetch(`http://localhost:5000/editRoom/${params.id}`),
              element: (
                <AdminRoute path="/editRoom/:id">
                  <EditRooms />
                </AdminRoute>
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
