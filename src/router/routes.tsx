import HomePage from '@views/HomePage';
import Login from '@views/auth/Login';
import Register from '@views/auth/Register';
import ResetEmail from '@views/auth/ResetEmail';
import Error404 from '@views/errors/Error404';
import Dashboard from '@views/protected';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    layout: 'guest',
  },
  {
    path: '/login',
    element: <Login />,
    layout: 'auth',
  },
  {
    path: '/register',
    element: <Register />,
    layout: 'auth',
  },
  {
    path: '/reset-email',
    element: <ResetEmail />,
    layout: 'auth',
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    layout: 'admin',
  },
  {
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
