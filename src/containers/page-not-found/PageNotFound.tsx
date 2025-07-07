import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <ErrorOutlineIcon
        sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 1 }}
      />
      <Typography variant="h4" color="primary" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/tabulaciones')}
        sx={{ borderRadius: 2, px: 4 }}
      >
        Ir al inicio
      </Button>
    </Box>
  );
};

export default PageNotFound;
