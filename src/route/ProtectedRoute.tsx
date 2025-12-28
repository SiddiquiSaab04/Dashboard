import { useSelector } from "react-redux";
import type { RootState } from "../../src/store/store";
import { Navigate } from "react-router";
import type { ProtectedRouteProps } from "../../src/components/interface/ProtectedRoute";
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const userIsLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  return <div>{userIsLoggedIn ? children : <Navigate to="/login" />}</div>;
};

