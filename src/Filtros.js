import React from 'react';
import { Button, Stack, Box } from '@mui/material';

function Filtros({ filtrarTareas }) {
  return (
    <Box display="flex" justifyContent="center" mb={2}> {/* Centra los botones */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="secondary" size="large" onClick={() => filtrarTareas('Todas')}>
          Todas
        </Button>
        <Button  variant="outlined" color="error" onClick={() => filtrarTareas('Pendientes')}>
          Pendientes
        </Button>
        <Button variant="contained" color="success" onClick={() => filtrarTareas('Completadas')}>
          Completadas
        </Button>
      </Stack>
    </Box>
  );
}

export default Filtros;
