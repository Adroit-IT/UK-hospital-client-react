import AdminLayout from '@component/layouts/AdminLayout';
import AuthLayout from '@component/layouts/AuthLayout';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: route.layout === 'blank' ? <AuthLayout>{route.element}</AuthLayout> : <AdminLayout>{route.element}</AdminLayout>,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
