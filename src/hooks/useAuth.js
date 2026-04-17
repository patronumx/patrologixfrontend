/**
 * PatroLogix — useAuth Hook
 * ════════════════════════════════════════════
 * Drop into: src/hooks/useAuth.js
 *
 * Provides: login, logout, user state, isAuthenticated
 * Works with the axiosClient.js auto-refresh interceptor
 */

import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import api, { setTokens, clearTokens, getAccessToken } from "../api/axiosClient";

// ─────────────────────────────────────────────
// Auth Context
// ─────────────────────────────────────────────
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // On app start, check if we already have a valid token
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        if (!isExpired) {
          setUser(decoded);
        } else {
          clearTokens();
        }
      } catch {
        clearTokens();
      }
    }
    setIsLoading(false);
  }, []);

  // ─── IDLE LOGOUT (15 MINS) ───
  useEffect(() => {
    let idleTimer;
    const resetTimer = () => {
      clearTimeout(idleTimer);
      if (user) {
        idleTimer = setTimeout(() => logout(), 15 * 60 * 1000); // 15 minutes of inactivity
      }
    };

    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // Init

    return () => {
      clearTimeout(idleTimer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [user, logout]);

  // ─── LOGIN ───
  const login = useCallback(async (username, password) => {
    try {
      const response = await api.post("/api/token/", { username, password });
      const { access, refresh } = response.data;

      setTokens(access, refresh);

      const decoded = jwtDecode(access);
      setUser(decoded);

      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.non_field_errors?.[0] ||
        "Login failed. Please check your credentials.";
      return { success: false, message };
    }
  }, []);

  // ─── LOGOUT ───
  const logout = useCallback(async () => {
    try {
      // Optionally blacklist refresh token on backend
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        await api.post("/api/token/blacklist/", { refresh: refreshToken }).catch(() => {});
      }
    } finally {
      clearTokens();
      setUser(null);
      window.location.href = "/login";
    }
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return context;
};

export default useAuth;
