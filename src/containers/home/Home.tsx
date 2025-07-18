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
import { getLocalilitiesByProvince } from '../../services/apis/location/getLocation';
import type { Locality, Province } from '../../services/types';
import { getProvinces } from '../../services/apis/location/getProvinces';
import { useLocationStore } from '../../contexts/location/useLocationStore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Navegación entre pantallas
  const navigate = useNavigate();

  // Contexto global para almacenar localidad, provincia y lista de localidades
  const {
    setGlobalLocalitiesByProvince,
    globalLocalitiesByProvince,
    setGlobalProvinceSelected,
  } = useLocationStore();

  // Estado local
  const [localidades, setLocalidades] = useState<Locality[]>([]);
  const [provincias, setProvincias] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  );
  const [selectedLocality, setSelectedLocality] = useState<Locality | null>(
    null
  );

  // Carga inicial de provincias y localidades
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        // Obtengo las provincias.
        const provs = await getProvinces();
        if (!isMounted) return;
        setProvincias(provs);
        // Inicializo con San Luis
        const sanluis = provs.find((p) => p.id === 'san-luis-arg');
        if (sanluis) {
          setProvince(sanluis);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Maneja el cambio de provincia seleccionada
  const handleChangeProvince = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const prov = provincias.find((p) => p.id === e.target.value) || null;
    if (prov) {
      setProvince(prov);
    }
  };

  /**
   * Actualiza todas las variables de la provincia y busca las localidades.
   * @param prov
   */
  const setProvince = async (prov: Province) => {
    setGlobalProvinceSelected(prov);
    setSelectedProvince(prov);
    const localities = await getLocalilitiesByProvince(prov.id);
    setLocalidades(localities);
  };

  // Maneja el cambio de localidad seleccionada
  const handleChangeLocality = (id: string) => {
    navigate('/categories'); // Redirige a la siguiente pantalla
  };

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

      {/* Selector de Provincias */}
      {provincias.length > 0 && (
        <TextField
          select
          label="Provincia"
          value={selectedProvince?.id ?? ''}
          onChange={handleChangeProvince}
          fullWidth
          sx={{ mb: 2 }}
        >
          {provincias.map((prov) => (
            <MenuItem key={prov.id} value={prov.id}>
              {prov.nombre}
            </MenuItem>
          ))}
        </TextField>
      )}

      {/* Selector de Localidades */}
      {localidades.length > 0 && (
        <LocationSelector
          localities={localidades}
          selectedLocality={selectedLocality}
          onChangeLocality={handleChangeLocality}
        />
      )}
    </Container>
  );
};

export default Home;
