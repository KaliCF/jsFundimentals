const jwt = require('jsonwebtoken');
const { BaseError } = require('sequelize/lib/errors');
const { UserModel } = require('../models');

const validateJWT = async (req, res, next) => {
    if (req.method == 'OPTIONS') {
        next();
    } else if (
        req.headers.authorization &&
        req.headers.authorization.includes('Bearer')
    ) {
        const { authorization } = req.headers;
        console.log('authorization -->', authorization);
        const payload = authorization
            ? jwt.verify(
                authorization.includes('Bearer')
                    ? authorization.split('')[1]
                    : authorization,
                process.env.JWT_SECRET
            )
            : undefined; //This is a ternary. This ternary verifies the token if authorization contains a truthy value. If it does not contain a truthy value, this ternary returns a value of undefined which is then stored in a variable called payload.

        console.log("payload -->", payload);

        if (payload) {
            let foundUser = await UserModel.findone({ where: { id: payload.id } });

            console.log("foundUser -->", foundUser);

            if (foundUser) {
                console.log("request -->", req);
                req.user = foundUser;
                next();
            } else {
                res.status(400).send({ message: "Not Authorized" });
            }
        } else {
            res.status(401).send({ message: "Invalid token" });
        }
    } else {
        res.status(403).send({ message: "Forbidden" });
    }
};

module.exports = validateJWT;