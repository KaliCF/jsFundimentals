const { DataTypes } = require('sequelize'); //importing in sequelized info to get only datatypes property.
const db = require('../db'); //import connection to data base

const User = db.define('user', { //capitalized variable usually indicates a model.
    username: { //Object blue print that all user models will use.
        unique: true,
        type: DataTypes.STRING
    },
    email: {
        require: true, //makes it so can't be empty
        allowNull: false, //makes it so we can't put in null
        type: DataTypes.STRING, //makes email have to be a string
        unique: true, //makes it so not allow mulitple accounts with same email
    },
    password: {
        require: true,
        allowNull: false,
        type: DataTypes.STRING,
    }
})

module.exports = User