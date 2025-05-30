const express = require('express');
const cors = require('cors');
const personajesRoutes = require('./rutas/personajes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/personajes', personajesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
