import IconMenuDashboard from '@component/atoms/Icon/Menu/IconMenuDashboard';

const menuConfig = [
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
