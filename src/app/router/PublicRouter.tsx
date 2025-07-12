import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../../contexts/useAuthStore';

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.token);

  return token ? <Navigate to="/formulario" /> : children;
};

export default PublicRoute;
