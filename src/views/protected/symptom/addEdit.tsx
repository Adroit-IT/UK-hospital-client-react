import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SymptomAddEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('SymptomAddEdit'));
  });

  return <div>Protected Page SymptomAddEdit</div>;
};

export default SymptomAddEdit;
