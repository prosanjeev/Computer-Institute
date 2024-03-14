// UserPrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";

const FranchisePrivateRoute = () => {
    if (localStorage.getItem("user")) {
        return <Outlet />;
      } else {
        return <Navigate to="/login" />;
      }
}

export default FranchisePrivateRoute;