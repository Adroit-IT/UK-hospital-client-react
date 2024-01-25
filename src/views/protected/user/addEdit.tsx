import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const UserAddEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('UserAddEdit'));
  });

  return <div>Protected Page UserAddEdit</div>;
};

export default UserAddEdit;
