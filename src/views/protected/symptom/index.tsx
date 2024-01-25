import { setPageTitle } from '@configs/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Symptoms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Symptoms'));
  });

  return <div>Protected Page Symptoms</div>;
};

export default Symptoms;
