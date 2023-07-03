import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const checkLogin = useSelector(state => state.checkLogin)
    return checkLogin && checkLogin.loggedIn;
};

const ProtectedRoutes = () => {

    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;