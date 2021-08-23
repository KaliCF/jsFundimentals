const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false, //makes it so you can't submit an empty string
        unique: true, //makes it so you can't use same email twice.
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;