import {
  Box,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import LocationSelector from '../location/LocationSelector';
import { getLocalidades } from '../../services/apis/location/getLocation';
import type { Locality, Province } from '../../services/types';
import { getProvinces } from '../../services/apis/location/getProvinces';
import { useLocationStore } from '../../contexts/location/useLocationStore';

// Resolver si dejamos harcodeadas las provincias y pedimos solo las localidades.

const Home = () => {
  const [localidades, setLocalidades] = useState<Locality[]>([]);
  const [provincias, setProvincias] = useState<string[]>([]);

  // Estado global.
  const { setLocalitySelected } = useLocationStore();
  const { setProvinceSelected } = useLocationStore();
  const { setLocalities } = useLocationStore();

  useEffect(() => {
    const fetchLocalidades = async () => {
      const data = await getLocalidades();
      setLocalidades(data);
    };

    const fetchProvinces = async () => {
      const data = await getProvinces();
      // Convierto en lista de strings.
      setProvincias(data.map((d) => d.nombre));
    };

    fetchLocalidades();
    fetchProvinces();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography
          variant="h1"
          fontSize={'2rem'}
          fontWeight="bold"
          gutterBottom
        >
          Ya sabes que hacer hoy?
        </Typography>
      </Box>

      {/* Localidades */}
      {localidades.length > 0 && (
        <LocationSelector
          provincias={provincias}
          localities={localidades}
          onChangeLocality={setLocalitySelected}
        />
      )}
    </Container>
  );
};

export default Home;
