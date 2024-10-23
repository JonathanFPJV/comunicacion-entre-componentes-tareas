import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Typography } from '@mui/material'; // Importamos Box y Grid
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

// Crear tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0572', // Un color poco común (morado oscuro)
    },
    secondary: {
      main: '#FF6F61', // Un color vibrante (rojo coral)
    },
    background: {
      default: '#f7f7f7', // Fondo gris claro para minimalismo
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Usa fuentes minimalistas como Roboto
  },
});

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('Todas');

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === 'Pendientes') {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === 'Completadas') {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={4}> {/* Agrega padding alrededor de toda la app */}
        <Typography variant="h4" align="center" gutterBottom>
          Lista de tareas
        </Typography>
        <Grid container spacing={2}> {/* Usa Grid para alinear los componentes */}
          <Grid item xs={12}>
            <TareaForm agregarTarea={agregarTarea} />
          </Grid>
          <Grid item xs={12}>
            <Filtros filtrarTareas={filtrarTareas} />
          </Grid>
          <Grid item xs={12}>
            <ListaTareas
              tareas={tareasFiltradas}
              eliminarTarea={eliminarTarea}
              editarTarea={editarTarea}
              toggleCompletada={toggleCompletada}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
