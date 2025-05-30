const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los personajes
router.get('/', (req, res) => {
    db.query('SELECT * FROM personajes', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Agregar personaje
router.post('/', (req, res) => {
    const { nombre, videojuego, año_lanzamiento, desarrollador } = req.body;
    db.query('INSERT INTO personajes SET ?', { nombre, videojuego, año_lanzamiento, desarrollador }, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, ...req.body });
    });
});

// Actualizar personaje
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, videojuego, año_lanzamiento, desarrollador } = req.body;
    db.query('UPDATE personajes SET ? WHERE id = ?', [{ nombre, videojuego, año_lanzamiento, desarrollador }, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id, ...req.body });
    });
});

// Eliminar personaje
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM personajes WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: 'Personaje eliminado', id });
    });
});

module.exports = router;
