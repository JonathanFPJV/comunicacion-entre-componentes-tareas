import React from 'react';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  return (
    <List>
      {tareas.map((tarea, index) => (
        <ListItem key={index} divider>
          <Checkbox
            checked={tarea.completada}
            onClick={() => toggleCompletada(index)}
          />
          <ListItemText primary={tarea.texto} />
          <IconButton onClick={() => editarTarea(index)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => eliminarTarea(index)}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ListaTareas;
