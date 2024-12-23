import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import { Providers } from "./providers";
import { AuthProvider } from "./lib/auth-context";
import { ProtectedRoute } from "./components/auth/protected-route";
import { Toaster } from "./components/ui/toaster";
import "./index.css";

// Create empty page component
// eslint-disable-next-line react-refresh/only-export-components
const EmptyPage = () => (
  <div className="dark">
    <DashboardPage />
  </div>
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            {/* Empty pages for other routes */}
            <Route
              path="/playground/*"
              element={
                <ProtectedRoute>
                  <EmptyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/models/*"
              element={
                <ProtectedRoute>
                  <EmptyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/docs/*"
              element={
                <ProtectedRoute>
                  <EmptyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings/*"
              element={
                <ProtectedRoute>
                  <EmptyPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </Providers>
  </React.StrictMode>,
);
