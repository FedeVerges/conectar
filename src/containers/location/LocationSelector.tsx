import { MenuItem, TextField } from '@mui/material';
import type { Locality } from '../../services/types';

type Props = {
  localities: Locality[];
  selectedLocality: Locality | null;
  onChangeLocality: (id: string) => void;
};

const LocationSelector: React.FC<Props> = ({
  localities,
  selectedLocality,
  onChangeLocality,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.value;
    const locality = localities.find((l) => l.id === selectedId);
    if (locality) {
      onChangeLocality(locality.id);
    }
  };

  return (
    <TextField
      select
      label="Localidad"
      value={selectedLocality?.id ?? ''}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    >
      {localities.map((loc) => (
        <MenuItem key={loc.id} value={loc.id}>
          {loc.nombre}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default LocationSelector;
