// src/routes/PrivateRoutes.tsx
import AdminLayout from '@component/layouts/AdminLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useProtectedRoute } from '../hooks/useProtectedRoute';
import DashboardPage from '../pages/DashboardPage';

const PrivateRoutes: React.FC = () => {
  useProtectedRoute(); // Assuming the useProtectedRoute handles redirects

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <Route index element={<DashboardPage />} />
            {/* Add more protected routes here */}
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;
