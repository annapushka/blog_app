import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRoutes, AppRoutesPathPattern } from '@/shared/const/router';

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRoutesPathPattern).forEach(([pattern, route]) => {
      const match = matchPath(location.pathname, pattern);
      if (match) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);
  return appRoute;
}
