import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Appointments'));
  });

  return <div>Protected Page Appointments</div>;
};

export default Appointments;
