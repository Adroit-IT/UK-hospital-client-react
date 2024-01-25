import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const DepartmentAddEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('DepartmentAddEdit'));
  });

  return <div>Protected Page DepartmentAddEdit</div>;
};

export default DepartmentAddEdit;
