import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Agregar tarea..."
        variant="outlined"
        fullWidth
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar tarea
      </Button>
    </form>
  );
}

export default TareaForm;
