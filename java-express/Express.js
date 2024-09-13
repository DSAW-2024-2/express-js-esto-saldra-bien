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

app.get('/user-info/:id', (req, res) => {
  const studentId = parseInt(req.params.id);  

  const student = students.find(s => s.id === studentId);

  if (!student) {  
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  res.json({
    name: student.name,
    lastName: student.lastName,
    email: student.email,
    id: student.id  
  });
}); .

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});