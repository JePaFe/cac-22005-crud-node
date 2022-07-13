const express = require('express');
const router = express.Router();

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const connection = require('../../db');

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        connection.query('SELECT * FROM usuarios WHERE email = ?', [ req.body.email ], async (error, results) => {
            if (error) { throw error }

            if (results.length == 0 || !(await bcryptjs.compare(req.body.password, results[0].password))) {
                res.json({ error: 'El correo y/o la contraseña son icorrectos' });
            } else {
                const payload = { user_id: results[0].id }
                const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });

                res.json({ token });
            }
        });
    } else {
        res.json({ error: 'El correo y/o la contraseña son icorrectos' });
    }
});

const isJWTLogin = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {
        return res.sendStatus(401);
    } else {
        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
            if (error) {
                return res.sendStatus(401);
            } else {
                console.log(decoded);
                next();
            }
        })
    }
}

router.get('/perfil', isJWTLogin, (req, res) => {
    res.json({ Perfil: 'Perfil' });
});

module.exports = router;