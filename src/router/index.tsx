import AdminLayout from '@components/layouts/AdminLayout';
import AuthLayout from '@components/layouts/AuthLayout';
import GuestLayout from '@components/layouts/GuestLayout';
import { MaintenanceMiddleware } from '@middlewares/maintenanceMiddleware';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const finalRoutes = routes.map((route) => {
  let layoutElement;

  switch (route.layout) {
    case 'auth':
      layoutElement = <AuthLayout>{route.element}</AuthLayout>;
      break;
    case 'admin':
      layoutElement = <AdminLayout>{route.element}</AdminLayout>;
      break;
    case 'guest':
      layoutElement = <GuestLayout>{route.element}</GuestLayout>;
      break;
    default:
      layoutElement = <AuthLayout>{route.element}</AuthLayout>;
  }

  const elementWithMaintenanceMiddleware = <MaintenanceMiddleware>{layoutElement}</MaintenanceMiddleware>;
  return {
    ...route,
    element: elementWithMaintenanceMiddleware,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
