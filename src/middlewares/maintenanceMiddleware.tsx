import Error503 from '@views/errors/Error503';
import { PropsWithChildren, useEffect, useState } from 'react';

export function MaintenanceMiddleware({ children }: PropsWithChildren) {
  const [isServiceUnavailable, setIsServiceUnavailable] = useState(false);

  useEffect(() => {
    const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE === 'true';

    // If in maintenance mode, immediately set service as unavailable
    if (isMaintenanceMode) {
      setIsServiceUnavailable(true);
    }
  }, []);

  if (isServiceUnavailable) {
    return <Error503 />;
  }

  return <>{children}</>;
}
