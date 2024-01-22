import HomePage from '@view/HomePage';
import Login from '@view/auth/Login';
import Register from '@view/auth/Register';
import ResetEmail from '@view/auth/ResetEmail';
import Dashboard from '@view/protected';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    layout: 'blank',
  },
  {
    path: '/login',
    element: <Login />,
    layout: 'blank',
  },
  {
    path: '/register',
    element: <Register />,
    layout: 'blank',
  },
  {
    path: '/reset-email',
    element: <ResetEmail />,
    layout: 'blank',
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];

export { routes };
