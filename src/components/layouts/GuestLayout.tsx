import ErrorBoundary from '@util/ErrorBoundary';
import { PropsWithChildren } from 'react';
import App from '../../App';

const GuestLayout = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary>
      <App>
        <div className="min-h-screen text-black dark:text-white-dark">{children}</div>
      </App>
    </ErrorBoundary>
  );
};

export default GuestLayout;
