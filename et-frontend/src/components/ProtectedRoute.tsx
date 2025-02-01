import { RouteProps } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
    children: JSX.Element; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isLoggedIn } = useAuth();
  
    if (!isLoggedIn) {
      return <Navigate to="/user/signin" />;
    }
  
    return children;
  };

export default ProtectedRoute;