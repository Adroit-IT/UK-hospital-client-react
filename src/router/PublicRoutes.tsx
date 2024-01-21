import AuthLayout from '@component/layouts/AuthLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }
      />
      {/* Add more public routes here */}
    </Routes>
  );
};

export default PublicRoutes;
