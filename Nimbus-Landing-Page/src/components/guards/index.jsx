import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";
import { Spinner } from "../ui/spinner";

export const ProtectedRoute = ({ children, fallbackPath = "/" }) => {
  const { isAuthenticated, checkingAuth } = useAuthStore();
  const location = useLocation();

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate to={fallbackPath} state={{ from: location.pathname }} replace />
    );
  }

  return <>{children}</>;
};

export const OnboardGuard = ({ children, fallbackPath = "/on-board" }) => {
  const { isAuthenticated, user, checkingAuth } = useAuthStore();
  const location = useLocation();

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  if (user && !user.onBoarded) {
    return (
      <Navigate to={fallbackPath} state={{ from: location.pathname }} replace />
    );
  }

  return <>{children}</>;
};

export const PublicRoute = ({ children, fallbackPath = "/home" }) => {
  const { isAuthenticated, user, checkingAuth } = useAuthStore();
  const location = useLocation();

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated) {
    if (user && !user.onBoarded) {
      return <Navigate to="/on-board" replace />;
    }

    const intendedPath = location.state?.from || fallbackPath;
    return <Navigate to={intendedPath} replace />;
  }

  return <>{children}</>;
};

export const OnboardingRoute = ({ children, fallbackPath = "/home" }) => {
  const { isAuthenticated, user, checkingAuth } = useAuthStore();

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user && user.onBoarded) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
};
