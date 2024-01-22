import { setPageTitle } from '@config/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Dashboard'));
  });

  return <div>Protected Page Dashboard</div>;
};

export default Dashboard;
