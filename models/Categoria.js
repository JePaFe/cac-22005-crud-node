const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db2');

class Categoria extends Model {}
Categoria.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: 'Solo se aceptan letras'
            }
        }
    }
}, { sequelize, modelName: 'categorias' });

module.exports = Categoria;