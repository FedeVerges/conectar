import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useCreateComercio } from '../../services/hooks/shops/useCreateComercio';

const categorias = ['gastronomia', 'alojamiento', 'artesania'];
const provincias = ['san-luis', 'cordoba'];
const localidades = {
  'san-luis': ['juana-koslay', 'merlo'],
  cordoba: ['villa-carlos-paz', 'capilla-del-monte'],
};

const Form = () => {
  const { mutate, isPending } = useCreateComercio();
  const [form, setForm] = useState({
    nombre: '',
    categoria: '',
    provinciaId: '',
    localidadId: '',
    descripcion: '',
    detalle: '',
    telefono: '',
    web: '',
    direccion: '',
    linkMaps: '',
    imagen: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        toast.success('Comercio cargado correctamente');
        setForm({
          nombre: '',
          categoria: '',
          provinciaId: '',
          localidadId: '',
          descripcion: '',
          detalle: '',
          telefono: '',
          web: '',
          direccion: '',
          linkMaps: '',
          imagen: '',
        });
      },
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Alta de nuevo comercio
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                label="Categoría"
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                fullWidth
              >
                {categorias.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                label="Provincia"
                name="provinciaId"
                value={form.provinciaId}
                onChange={handleChange}
                fullWidth
              >
                {provincias.map((prov) => (
                  <MenuItem key={prov} value={prov}>
                    {prov}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                label="Localidad"
                name="localidadId"
                value={form.localidadId}
                onChange={handleChange}
                fullWidth
                disabled={!form.provinciaId}
              >
                {(
                  localidades[form.provinciaId as keyof typeof localidades] ||
                  []
                ).map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={12}>
              <TextField
                label="Descripción breve"
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Detalle"
                name="detalle"
                value={form.detalle}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Teléfono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Web"
                name="web"
                value={form.web}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Dirección"
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Link de Google Maps"
                name="linkMaps"
                value={form.linkMaps}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={12}>
              <TextField
                label="Imagen (URL)"
                name="imagen"
                value={form.imagen}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid size={12} textAlign="center">
              <Button type="submit" variant="contained" disabled={isPending}>
                {isPending ? 'Guardando...' : 'Guardar comercio'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Form;
