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
const session = require('express-session');

app.use(session({
    secret: 'hcd*u9#{SJdWxFuS',
    resave: false,
    saveUninitialized: false
}));

const isLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    }
 
    next();
}

app.use(require('./routes/index'));
app.use(require('./routes/productos'));
app.use(require('./routes/contacto'));

app.use('/admin', isLogin, require('./routes/admin/productos'));

app.use(require('./routes/auth'));

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));