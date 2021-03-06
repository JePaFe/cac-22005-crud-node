const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const { check, body, validationResult } = require('express-validator');

router.get('/contacto', (req, res) => {
    res.render('contacto/index', { values: {} });
})

router.post('/contacto', [
    // body('nombre', 'El nombre es obligatorio y tiene que tener mas de 3 caracteres.').exists().isLength(3).escape(),
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .isLength({ min: 3 })
        .withMessage('El nombre tiene que tener mas de 3 caracteres'),
    body('email', 'El email es obligatorio y tiene que ser valido.').exists().isEmail().normalizeEmail(),
    body('mensaje', 'El mensaje es obligatorio.').exists().trim().notEmpty().escape()
] , (req, res) => {
    const errors = validationResult(req);
    // console.log(req.body, errors);

    if (errors.isEmpty()) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            secure: false,
            auth: {
                user: '...',
                pass: '...'
            }
        });

        ejs.renderFile(__dirname + '/../views/contacto/correo.ejs', { body: req.body }, (error, html) => {
            if (error) { throw error }

            const options = {
                from: req.body.email,
                to: 'y@y.com',
                subject: 'Nodemailer',
                html: html
            }
    
            transporter.sendMail(options, (error, info) => {
                if (error) { throw error }
        
                console.log(info);
            });
        });

        res.send('Enviado...');
    } else {
        res.render('contacto/index', { values: req.body, errors: errors.array() })
    }
})

module.exports = router;