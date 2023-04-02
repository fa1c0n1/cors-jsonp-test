const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

app.set('views engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on port 3000');
});
