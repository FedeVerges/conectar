import { createTheme, type ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#222363' : '#9fa8da',
      light: mode === 'light' ? '#4d519c' : '#7986cb',
      dark: mode === 'light' ? '#1C1F4C' : '#5c6bc0',
      contrastText: mode === 'light' ? '#ffffff' : '#000000',
    },
    secondary: {
      main: mode === 'light' ? '#FF7518' : '#ffb74d',
      light: mode === 'light' ? '#ff9447' : '#ffcc80',
      dark: mode === 'light' ? '#C75A14' : '#ffa726',
      contrastText: mode === 'light' ? '#ffffff' : '#000000',
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#222222' : '#f5f5f5',
      secondary: mode === 'light' ? '#555555' : '#e0e0e0',
    },
    divider:
      mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export const lightTheme = createTheme(getDesignTokens('light'));
export const darkTheme = createTheme(getDesignTokens('dark'));
