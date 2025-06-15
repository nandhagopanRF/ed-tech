import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRole }) => {
    const token = localStorage.getItem("sessionToken");
    const role = localStorage.getItem("userRole");

    if (!token || role !== allowedRole) {
        return <Navigate to="/account" />;
    }

    return children;
};

export default PrivateRoute;
