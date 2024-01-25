import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AppointmentAddEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('AppointmentAddEdit'));
  });

  return <div>Protected Page AppointmentAddEdit</div>;
};

export default AppointmentAddEdit;
