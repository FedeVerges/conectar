import { Box, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const modules = [
  // TODO: Agregar mocks
];

const Home = () => {
  // Barra de navegacion.
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, pt: 2.5, ml: 17 }}>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Inicio
      </Typography>
      <Divider sx={{ mb: 2.7, mr: 29 }} />
    </Box>
  );
};

export default Home;
