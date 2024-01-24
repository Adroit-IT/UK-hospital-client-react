import Error503 from '@views/errors/Error503';
import { PropsWithChildren, useEffect, useState } from 'react';

export function MaintenanceMiddleware({ children }: PropsWithChildren) {
  const [isServiceUnavailable, setIsServiceUnavailable] = useState(false);

  useEffect(() => {
    // Simulate a maintenance scenario (replace this with your actual logic)
    const timeoutId = setTimeout(() => {
      setIsServiceUnavailable(true);
    }, 10000); // 10 seconds for demonstration, adjust as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  if (isServiceUnavailable) {
    return <Error503 />;
  }

  return <>{children}</>;
}
