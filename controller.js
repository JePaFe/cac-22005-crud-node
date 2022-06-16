const connection = require('./db');

module.exports.index = (req, res) => {
    connection.query('SELECT * FROM productos', (error, results) => {
        if (error) { throw error }

        res.render('productos/index', { productos: results });
    });
}

module.exports.create = (req, res) => {
    res.render('productos/create');
}

module.exports.store = (req, res) => {
    connection.query('INSERT INTO productos SET ?', 
        { nombre: req.body.nombre, categoria_id: req.body.categoria }, 
        (error, results) => {
            
        if (error) { throw error }

        // console.log(results);
        res.redirect('/productos');
    });
}

module.exports.show = (req, res) => {
    connection.query('SELECT * FROM productos WHERE id = ?', [ req.params.id ], (error, results) => {
        if (error) { throw error }

        // console.log(results);
        res.render('productos/show', { producto: results[0] });
    })
}

module.exports.edit = (req, res) => {
    connection.query('SELECT * FROM productos WHERE id = ?', [ req.params.id ], (error, results) => {
        if (error) { throw error }

        // console.log(results);
        res.render('productos/edit', { producto: results[0] });
    })
}

module.exports.update = (req, res) => {
    connection.query('UPDATE productos SET ? WHERE id = ?', [ { nombre: req.body.nombre, categoria_id: req.body.categoria }, req.body.id ] , (error) => {
        if (error) { throw error }

        res.redirect('/productos')
    });
}