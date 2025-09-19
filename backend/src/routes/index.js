const express = require('express');
const router = express.Router();

const farmerRoutes = require('./farmer');
const traceabilityRoutes = require('./traceability');
const qrRoutes = require('./qr');

// API Routes
router.use('/farmer', farmerRoutes);
router.use('/trace', traceabilityRoutes);
router.use('/qr', qrRoutes);

// API Info
router.get('/', (req, res) => {
    res.json({
        name: 'FarmTrace API',
        version: '1.0.0',
        description: 'Blockchain-based supply chain transparency for agricultural produce',
        endpoints: [
            'GET /api/farmer/products - Get all products',
            'POST /api/farmer/products - Create new product',
            'PUT /api/farmer/products/:id/transfer - Transfer product',
            'GET /api/trace/:productId - Get product trace history',
            'GET /api/qr/:productId - Get QR code for product'
        ]
    });
});

module.exports = router;
