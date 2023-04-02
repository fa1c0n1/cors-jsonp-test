const express = require('express');
const app = express();

const port = 3000;
const address = '127.0.0.1'

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/anime', (req, res) => {
    const anime = [
        { name: 'One Piece', episodes: 1000 },
        { name: 'Naruto', episodes: 720 },
        { name: 'Bleach', episodes: 366 },
        { name: 'Attack on Titan', episodes: 76 },
    ];
    res.json(anime);
});

app.listen(port, address, () => {
    console.log(`Server is listening on http://${address}:${port}`);
});
