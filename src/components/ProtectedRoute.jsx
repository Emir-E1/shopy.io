import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
}

export default ProtectedRoute;
