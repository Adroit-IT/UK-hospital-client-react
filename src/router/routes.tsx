import HomePage from '@view/HomePage';
import Login from '@view/auth/Login';
import Register from '@view/auth/Register';
import ResetEmail from '@view/auth/ResetEmail';
import Dashboard from '@view/protected';

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
    path: '/404',
    element: 'Not Found',
    layout: '',
  },
];

export { routes };
