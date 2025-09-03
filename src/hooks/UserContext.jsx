/* eslint-disable react-refresh/only-export-components */
// src/context/UserContext.jsx

import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para fazer login
  const signIn = (userData, token) => {
    setUser(userData);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('@codeburger:user', JSON.stringify(userData));
    localStorage.setItem('@codeburger:token', token);
  };

  // Função para fazer logout
  const signOut = () => {
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('@codeburger:user');
    localStorage.removeItem('@codeburger:token');
  };

  useEffect(() => {
    const loadUserFromStorage = () => {
      const storedUser = localStorage.getItem('@codeburger:user');
      const storedToken = localStorage.getItem('@codeburger:token');

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
      setLoading(false);
    };

    loadUserFromStorage();
  }, []);

  return (
    <UserContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  return context;
};