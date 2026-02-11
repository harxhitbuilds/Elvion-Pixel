import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// guards
import {
  ProtectedRoute,
  PublicRoute,
  OnboardGuard,
  OnboardingRoute,
} from "./components/guards/index";

// stores
import { useAuthStore } from "./stores/useAuthStore";

// layout
import Layout from "./components/layout/layout";

// pages
import LandPage from "./pages/land-page";
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import ModelsPage from "./pages/models-page";
import Trips from "./pages/trip-page";
import TripDetailPage from "./pages/trip-detail-page";
import ProfilePage from "./pages/profile-page";
import SettingPage from "./pages/settings-page";

import { Spinner } from "./components/ui/spinner";

const App = () => {
  const { checkAuth, checkingAuth } = useAuthStore();
  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Spinner className="size-8 text-white" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LandPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        {/* <Route path="/share/:tripId" element={<SharePage />} /> */}
        {/* <Route
          path="/on-board"
          element={
            <OnboardingRoute>
              <Board />
            </OnboardingRoute>
          }
        /> */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/home"
            element={
              <OnboardGuard>
                <HomePage />
              </OnboardGuard>
            }
          />
          <Route
            path="/3d-models"
            element={
              <OnboardGuard>
                <ModelsPage />
              </OnboardGuard>
            }
          />
          <Route
            path="/my-trips"
            element={
              <OnboardGuard>
                <Trips />
              </OnboardGuard>
            }
          />
          <Route
            path="/profile"
            element={
              <OnboardGuard>
                <ProfilePage />
              </OnboardGuard>
            }
          />
          <Route
            path="/settings"
            element={
              <OnboardGuard>
                <SettingPage />
              </OnboardGuard>
            }
          />
          <Route
            path="/my-trips/:tripId"
            element={
              <OnboardGuard>
                <TripDetailPage />
              </OnboardGuard>
            }
          />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
