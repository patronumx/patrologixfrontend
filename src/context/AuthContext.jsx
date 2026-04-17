import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { authService } from '../services/api';

const AuthContext = createContext(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = async () => {
        const token = localStorage.getItem('access_token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp && decoded.exp * 1000 < Date.now()) {
                    authService.logout();
                    setUser(null);
                    setLoading(false);
                    return null;
                }
                const response = await authService.getCurrentUser();
                let userData = null;
                // Handle both paginated ({ results: [...] }) and non-paginated ([...]) responses
                const results = response.data?.results || response.data;
                if (Array.isArray(results) && results.length > 0) {
                    userData = results[0];
                } else {
                    userData = { id: decoded.user_id };
                }
                setUser(userData);
                setLoading(false);
                return userData;
            } catch (error) {
                console.error("Auth check failed", error);
                authService.logout();
                setUser(null);
                setLoading(false);
                return null;
            }
        }
        setLoading(false);
        return null;
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const login = async (username, password) => {
        try {
            // Clear previous user state before logging in as new user
            setUser(null);
            authService.logout();
            await authService.login(username, password);
            return await checkAuthStatus();
        } catch (error) {
            console.error("Login failed", error);
            setUser(null);
            authService.logout();
            throw error;
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

