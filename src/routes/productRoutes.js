const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const productController = require('../controllers/productController');
const productActivityController = require('../controllers/productActivityController');

router.get('/products', authMiddleware, productController.index);
router.get('/products/:id', authMiddleware, productController.show);
router.get('/products/:id/activities', authMiddleware, productActivityController.index);
router.post('/products/:id/activities', authMiddleware, productActivityController.create);
router.post('/products', authMiddleware, productController.create);
router.put('/products/:id', authMiddleware, productController.update);
router.delete('/products/:id', authMiddleware, productController.delete);

module.exports = router;
