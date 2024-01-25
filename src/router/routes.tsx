import HomePage from '@views/HomePage';
import Login from '@views/auth/Login';
import Register from '@views/auth/Register';
import ResetEmail from '@views/auth/ResetEmail';
import Error404 from '@views/errors/Error404';
import Dashboard from '@views/protected';
import Appointments from '@views/protected/appointment';
import AppointmentAddEdit from '@views/protected/appointment/addEdit';
import Departments from '@views/protected/department';
import DepartmentAddEdit from '@views/protected/department/addEdit';
import Roles from '@views/protected/role';
import RoleAddEdit from '@views/protected/role/addEdit';
import Symptoms from '@views/protected/symptom';
import SymptomAddEdit from '@views/protected/symptom/addEdit';
import Users from '@views/protected/user';
import UserAddEdit from '@views/protected/user/addEdit';

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
    path: '/appointments',
    element: <Appointments />,
    layout: 'admin',
  },
  {
    path: '/appointment/edit/:id',
    element: <AppointmentAddEdit />,
    layout: 'admin',
  },
  {
    path: '/departments',
    element: <Departments />,
    layout: 'admin',
  },
  {
    path: '/department/edit/:id',
    element: <DepartmentAddEdit />,
    layout: 'admin',
  },
  {
    path: '/roles',
    element: <Roles />,
    layout: 'admin',
  },
  {
    path: '/role/edit/:id',
    element: <RoleAddEdit />,
    layout: 'admin',
  },
  {
    path: '/symptoms',
    element: <Symptoms />,
    layout: 'admin',
  },
  {
    path: '/symptom/edit/:id',
    element: <SymptomAddEdit />,
    layout: 'admin',
  },
  {
    path: '/users',
    element: <Users />,
    layout: 'admin',
  },
  {
    path: '/user/edit/:id',
    element: <UserAddEdit />,
    layout: 'admin',
  },
  {
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
