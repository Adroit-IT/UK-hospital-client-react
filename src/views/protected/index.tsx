import { setPageTitle } from '@config/themeConfigSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Home Page'));
  });

  return <div>Protected Page Page</div>;
};

export default Index;
