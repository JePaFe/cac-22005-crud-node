const express = require('express');
const router = express.Router();

const controller = require('../../controllers/admin/productos');

router.get('/productos', controller.index);

router.get('/productos/create', controller.create);
router.post('/productos/store', controller.store);

router.get('/productos/:id', controller.show);

router.get('/productos/:id/edit', controller.edit);
router.put('/productos/update', controller.update);

router.delete('/productos/:id/delete', controller.delete);

module.exports = router;