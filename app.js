require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverrride = require('method-override');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));
app.use(methodOverrride('_method'));

app.use(require('./routes/index'));
app.use(require('./routes/productos'));
app.use(require('./routes/contacto'));

app.use('/admin', require('./routes/admin/productos'));

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));