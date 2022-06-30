const Categoria = require('../../models/Categoria');

module.exports.index = (req, res) => {
    Categoria.findAll().then(categorias => {
        res.render('admin/categorias/index', { categorias: categorias, layout: 'layout-admin' });
    });
}

module.exports.create = (req, res) => {
    res.render('admin/categorias/create', { layout: 'layout-admin' });
}

module.exports.store = (req, res) => {
    Categoria.create({
        nombre: req.body.nombre
    })
        .then(() => res.redirect('/admin/categorias'))
        .catch(error => { console.log(error) });
}

module.exports.show = (req, res) => {
    Categoria.findByPk(req.params.id).then(categoria => {
        res.render('admin/categorias/show', { categoria: categoria, layout: 'layout-admin' });
    })
}

module.exports.edit = (req, res) => {
    Categoria.findByPk(req.params.id).then(categoria => {
        if (categoria) {
            res.render('admin/categorias/edit', { categoria: categoria, layout: 'layout-admin' });
        } else {
            res.send('No hay registros');
        }
    });
}

module.exports.update = (req, res) => {
    Categoria.update({
        nombre: req.body.nombre
    }, {
        where: { id: req.body.id }
    }).then(() => res.redirect('/admin/categorias'));
}

module.exports.delete = (req, res) => {
    Categoria.destroy({
        where: { id: req.params.id }
    }).then(() => res.redirect('/admin/categorias'));
}