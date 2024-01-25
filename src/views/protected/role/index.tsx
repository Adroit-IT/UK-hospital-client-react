import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Roles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Roles'));
  });

  return <div>Protected Page Roles</div>;
};

export default Roles;
