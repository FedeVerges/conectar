import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';
import { ToastContainer } from 'react-toastify';

import queryClient from '../queryClient';
import { lightTheme } from '../themes/theme';
import AppRouter from './router/AppRouter';


export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-right" autoClose={3000} />
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
