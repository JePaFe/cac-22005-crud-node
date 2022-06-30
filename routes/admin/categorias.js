const express = require('express');
const router = express.Router();

const controller = require('../../controllers/admin/categorias');

router.get('/categorias', controller.index);

router.get('/categorias/create', controller.create);
router.post('/categorias/store', controller.store);

router.get('/categorias/:id', controller.show);

router.get('/categorias/:id/edit', controller.edit);
router.put('/categorias/update', controller.update);

router.delete('/categorias/:id/delete', controller.delete);

module.exports = router;