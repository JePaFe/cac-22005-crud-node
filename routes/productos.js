const express = require('express');
const router = express.Router();

const productos = require('../productos');

router.get('/productos', (req, res) => {
    res.render('productos/index', { productos: productos.all() });
})

router.get('/productos/:id', (req, res) => {
    res.render('productos/show', { producto: productos.find(req.params.id) });
});

module.exports = router;