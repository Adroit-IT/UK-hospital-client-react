import IconMenuDashboard from '@components/atoms/Icons/Menu/IconMenuDashboard';

const menuConfig = [
  {
    title: 'Dashboard',
    icon: <IconMenuDashboard />,
    directRoute: '/dashboard',
  },
  {
    title: 'Components',
    icon: <IconMenuDashboard />,
    label: 'Components',
    url: '/components',
    subMenuItems: [
      { label: 'Tabs', url: '/components/tabs' },
      { label: 'Accordions', url: '/components/accordions' },
    ],
  },
];

export default menuConfig;
