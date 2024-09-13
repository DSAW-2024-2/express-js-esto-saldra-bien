const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const students = {
  1: {
    name: "Santiago",
    lastName: "Bazzani",
    email: "santiagobari@unisabana.edu.co",
    id: "0000310457"
  },
  2: {
    name: "Daniel",
    lastName: "Forero",
    email: "danielforsa@unisabana.edu.co",
    id: "0000309277"
  }
};

app.get('/user-info/:id', (req, res) => {
  const studentId = req.params.id;

  if (!students[studentId]) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  res.json(students[studentId]);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
