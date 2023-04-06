import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>User Not Found</div>;
  }

  if (user && user.email === "kamrulhasan.antor95@gmail.com") {
    return children;
  }

  return <Navigate to="/" replace />;
}

export default AdminRoute;
