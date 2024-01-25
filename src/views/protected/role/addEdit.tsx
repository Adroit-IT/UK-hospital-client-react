import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RoleAddEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('RoleAddEdit'));
  });

  return <div>Protected Page RoleAddEdit</div>;
};

export default RoleAddEdit;
