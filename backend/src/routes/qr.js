const express = require('express');
const router = express.Router();
const qrController = require('../controllers/qrController');

// Routes
router.get('/:productId', qrController.generateQR);
router.post('/scan', qrController.scanQR);

module.exports = router;
