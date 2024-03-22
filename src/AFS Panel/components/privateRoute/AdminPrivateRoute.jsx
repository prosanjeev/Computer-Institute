// AdminPrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin && admin.user.email === "sanjeevcse2k23@gmail.com") {
    return <Outlet />;
  } else {
    return <Navigate to="/admin-login" />;
  }
}

export default AdminPrivateRoute;