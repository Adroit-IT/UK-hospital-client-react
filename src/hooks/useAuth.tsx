import { AuthService, UserData } from '@services/AuthService';
import { useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(() => {
    // Check if user data is available in localStorage
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData).accessToken : null;
  });

  const login = async (loginUserData: UserData) => {
    try {
      const userData = await AuthService.login(loginUserData);
      setToken(userData.accessToken);

      // Save user data to storage (localStorage or sessionStorage)
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      // Handle login error...
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();

      // Remove user data from storage
      localStorage.removeItem('userData');
      setToken(null);
    } catch (error) {
      // Handle logout error...
    }
  };

  const isAuthenticated = !!token;

  return { token, login, logout, isAuthenticated };
};
