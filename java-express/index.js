const express = require('express');
const app = express();
const PORT = 3000; 

const students = [
  {
    id: 1,
    name: "Santiago",          
    lastName: "Bazzani",      
    email: "santiagobari@unisabana.edu.co",  
    id: "0000310457"           
  },
  {
    id: 2,
    name: "Daniel",           
    lastName: "Forero",     
    email: "danielforsa@unisabana.edu.co",  
    id: "0000309277"   
        
  }
];

// Endpoint dinámico para obtener información de los estudiantes
app.get('/user-info/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10); // Obtener el ID del parámetro de la URL
  const student = students.find(s => s.id === studentId);

  // Validación de entrada
  if (!student) {
    return res.status(404).json({ error: 'Estudiante no encontrado' });
  }

  // Retornar la información del estudiante
  res.json(student);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});