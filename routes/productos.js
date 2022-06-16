const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.get('/productos', controller.index);

router.get('/productos/create', controller.create);
router.post('/productos/store', controller.store);

router.get('/productos/:id', controller.show);

router.get('/productos/:id/edit', controller.edit);
router.put('/productos/update', controller.update);

module.exports = router;