// UserPrivateRoute.js
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/franchise/authSlice";

const FranchisePrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // return isLoggedIn ? <Routes> <Route path='/dashboard' element={<Dashboard/>  } />   </Routes> : <Navigate to="/login" />  ;
  
   return isLoggedIn ? <Outlet/> : ( <Navigate to="/franchise-login" /> );
};

export default FranchisePrivateRoute;