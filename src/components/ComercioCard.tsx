import { Language, Phone,Place } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Typography,
} from '@mui/material';

import type { Comercio } from '../services/types';

interface Props {
  comercio: Comercio;
}

const ComercioCard = ({ comercio }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: 3 }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={comercio.imagen}
          alt={comercio.nombre}
          sx={{ width: 64, height: 64, borderRadius: 2 }}
        />
        <Box>
          <Typography fontWeight="bold">{comercio.nombre}</Typography>
          <Typography fontSize={14} color="text.secondary">
            <Place fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            {comercio.direccion}, {comercio.localidadId}, {comercio.provinciaId}
          </Typography>
        </Box>
      </Box>

      <Stack direction="row" spacing={1} mt={2} justifyContent="space-evenly">
        <Button
          variant="outlined"
          size="small"
          fullWidth
          startIcon={<Language />}
          href={comercio.web}
          target="_blank"
        >
          Web
        </Button>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          startIcon={<Place />}
          href={comercio.linkMaps}
          target="_blank"
        >
          Mapa
        </Button>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          startIcon={<Phone />}
          href={`tel:${comercio.telefono}`}
        >
          Llamar
        </Button>
      </Stack>
    </Card>
  );
};

export default ComercioCard;
