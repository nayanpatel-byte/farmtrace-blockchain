const QRCode = require('qrcode');

class QRService {
    async generateQRCode(data) {
        try {
            const qrData = JSON.stringify({
                productId: data.id,
                name: data.name,
                farmer: data.farmer,
                origin: data.origin,
                timestamp: new Date().toISOString(),
                verificationUrl: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify/${data.id}`
            });

            const qrCodeDataURL = await QRCode.toDataURL(qrData, {
                errorCorrectionLevel: 'M',
                type: 'image/png',
                quality: 0.92,
                margin: 1,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF',
                },
                width: parseInt(process.env.QR_CODE_SIZE) || 200
            });

            return {
                dataURL: qrCodeDataURL,
                data: qrData
            };
        } catch (error) {
            console.error('Error generating QR code:', error);
            throw new Error('Failed to generate QR code');
        }
    }

    parseQRData(qrData) {
        try {
            return JSON.parse(qrData);
        } catch (error) {
            console.error('Error parsing QR data:', error);
            throw new Error('Invalid QR code data');
        }
    }
}

module.exports = new QRService();
