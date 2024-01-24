import ErrorBoundary from '@utils/ErrorBoundary';
import { PropsWithChildren } from 'react';
import App from '../../App';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary>
      <App>
        <div className="min-h-screen text-black dark:text-white-dark">{children} </div>
      </App>
    </ErrorBoundary>
  );
};

export default AuthLayout;
