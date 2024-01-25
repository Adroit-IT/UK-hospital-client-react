import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Departments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Departments'));
  });

  return <div>Protected Page Departments</div>;
};

export default Departments;
