const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const farmerController = require('../controllers/farmerController');

// Validation middleware for product creation
const validateProduct = [
    body('name').notEmpty().withMessage('Product name is required'),
    body('farmer').notEmpty().withMessage('Farmer name is required'),
    body('origin').notEmpty().withMessage('Origin is required'),
    body('harvestDate').isISO8601().withMessage('Valid harvest date is required'),
    body('quantity').notEmpty().withMessage('Quantity is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('qualityCertification').optional()
];

// Routes
router.get('/products', farmerController.getProducts);
router.post('/products', validateProduct, farmerController.createProduct);
router.put('/products/:productId/transfer', farmerController.transferProduct);

module.exports = router;
