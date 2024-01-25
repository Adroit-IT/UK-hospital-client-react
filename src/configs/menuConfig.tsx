import IconArchive from '@components/atoms/Icons/IconArchive';
import IconEye from '@components/atoms/Icons/IconEye';
import IconSettings from '@components/atoms/Icons/IconSettings';
import IconTag from '@components/atoms/Icons/IconTag';
import IconUsers from '@components/atoms/Icons/IconUsers';
import IconMenuDashboard from '@components/atoms/Icons/Menu/IconMenuDashboard';

const menuConfig = [
  {
    title: 'Dashboard',
    icon: <IconMenuDashboard />,
    directRoute: '/dashboard',
  },
  {
    title: 'Appointments',
    icon: <IconEye />,
    directRoute: '/appointments',
  },
  {
    title: 'Departments',
    icon: <IconArchive />,
    directRoute: '/departments',
  },
  {
    title: 'Roles',
    icon: <IconSettings />,
    directRoute: '/roles',
  },
  {
    title: 'Symptoms',
    icon: <IconTag />,
    directRoute: '/symptoms',
  },
  {
    title: 'Users',
    icon: <IconUsers />,
    directRoute: '/users',
  },
  // Example
  {
    title: 'Components',
    icon: <IconMenuDashboard />,
    url: '/components',
    subMenuItems: [
      { label: 'Tabs', url: '/components/tabs' },
      { label: 'Accordions', url: '/components/accordions' },
    ],
  },
];

export default menuConfig;
