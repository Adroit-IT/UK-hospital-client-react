import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Users'));
  });

  return <div>Protected Page Users</div>;
};

export default Users;
