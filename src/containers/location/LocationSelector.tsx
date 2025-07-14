import { MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import type { Locality } from '../../services/types';

type Props = {
  provincias: string[];
  localities: Locality[];
  onChangeLocality: (Locality: Locality) => void;
  // onChangeProvince: (Locality: Locality) => void;
};

const LocationSelector: React.FC<Props> = ({
  provincias,
  localities,
  onChangeLocality,
}) => {
  const [provincia, setProvincia] = useState<string>(provincias[0]);
  const [Locality, setLocality] = useState<Locality>();

  const changeLocality = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocality(value as unknown as Locality);
    onChangeLocality(value as unknown as Locality);
  };

  return (
    <>
      <TextField
        select
        label="Provincia"
        value={provincia}
        onChange={(e) => setProvincia(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {provincias.map((prov) => (
          <MenuItem key={prov} value={prov}>
            {prov}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Locality"
        name="LocalityId"
        value={Locality || ''}
        onChange={changeLocality}
        fullWidth
      >
        {localities.map((loc) => (
          <MenuItem key={loc.id} value={loc.nombre}>
            {loc.nombre}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default LocationSelector;
