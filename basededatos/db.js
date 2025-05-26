const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',              // ✅ usuario real
  password: '',              // ✅ sin contraseña (si así está tu MySQL)
  database: 'videojuegos'   // ✅ nombre real de tu base
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
