import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '../../contexts/useAuthStore';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.token);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
