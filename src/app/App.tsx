import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';

import queryClient from '../queryClient';
import { lightTheme } from '../themes/theme';
import AppRouter from './router/AppRouter';

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
