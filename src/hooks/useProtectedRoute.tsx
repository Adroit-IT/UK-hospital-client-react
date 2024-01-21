import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMiddleware } from '../middleware/AuthMiddleware';

export const useProtectedRoute = (redirectPath = '/login') => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await AuthMiddleware.isAuthenticated();

      if (!isAuthenticated) {
        navigate(redirectPath, { replace: true });
      }
    };

    checkAuthentication();
  }, [navigate, redirectPath]);
};
