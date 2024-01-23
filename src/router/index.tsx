import AdminLayout from '@component/layouts/AdminLayout';
import AuthLayout from '@component/layouts/AuthLayout';
import GuestLayout from '@component/layouts/GuestLayout';
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

  return {
    ...route,
    element: layoutElement,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
