import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleTokenChange);
    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  }, []);

  return token ? children : <Navigate to="/login" />;
};