const express = require('express');
const router = express.Router();

const controller = require('../../controllers/api/categorias');

router.get('/categorias', controller.index);

router.post('/categorias', controller.store);

router.get('/categorias/:id', controller.show);

router.put('/categorias', controller.update);

router.delete('/categorias/:id', controller.delete);

module.exports = router;