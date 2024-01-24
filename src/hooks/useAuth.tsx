import { AuthMiddleware } from '@middlewares/AuthMiddleware';
import { useState } from 'react';
import { AuthService } from '../services/AuthService';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    const authToken = await AuthService.login(username, password);
    setToken(authToken);
  };

  const logout = async () => {
    await AuthService.logout();
    setToken(null);
  };

  const isAuthenticated = AuthMiddleware.isAuthenticated(token);

  return { token, login, logout, isAuthenticated };
};
