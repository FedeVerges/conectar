import { Container, MenuItem, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import ComercioCard from '../../components/ComercioCard';
import { useGetComercio } from '../../services/hooks/shops/useGetComercio';
const categorias = ['gastronomia', 'alojamiento', 'artesania'];
const provincias = ['san-luis'];
const localidades: Record<string, string[]> = {
  'san-luis': ['juana-koslay', 'merlo'],
};

const Home = () => {
  const [provinciaId, setProvinciaId] = useState('san-luis');
  const [localidadId, setLocalidadId] = useState('juana-koslay');
  const [categoria, setCategoria] = useState('gastronomia');
  const [nombre, setNombre] = useState('');

  const { data = [], isLoading } = useGetComercio({
    provinciaId,
    localidadId,
    categoria,
    nombre,
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Buscar Comercios
      </Typography>

      <Grid container spacing={2} mb={3}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            select
            label="Provincia"
            value={provinciaId}
            onChange={(e) => setProvinciaId(e.target.value)}
            fullWidth
          >
            {provincias.map((prov) => (
              <MenuItem key={prov} value={prov}>
                {prov}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            select
            label="Localidad"
            value={localidadId}
            onChange={(e) => setLocalidadId(e.target.value)}
            fullWidth
          >
            {(localidades[provinciaId] || []).map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            select
            label="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            fullWidth
          >
            {categorias.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={12}>
          <TextField
            label="Buscar por nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {isLoading ? (
          <Grid size={12}>
            <Typography variant="body2">Cargando...</Typography>
          </Grid>
        ) : data.length === 0 ? (
          <Grid size={12}>
            <Typography variant="body2">
              No se encontraron comercios.
            </Typography>
          </Grid>
        ) : (
          data.map((comercio) => (
            <Grid key={comercio.id} size={12}>
              <ComercioCard comercio={comercio} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Home;
