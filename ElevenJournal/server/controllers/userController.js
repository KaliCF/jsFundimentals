const { UniqueConstraintError } = require("sequelize/lib/errors");
const router = require("express").Router();
const { UniqueConstraintError } = require("sequelize/types");
const { UserModel } = require("../models");
const User = require("../models/user");

router.post("/register", async (req, res) => {
    let { email, password } = req.body.UserModel;
    try {
        const User = await UserModel.create({
            email,
            password
        });
        res.status(201).json({
            message: "User successfully registered.",
            user: User
        });
    } catch (err) {
        if (err instanceof UniqueConstraintError) {
            res.status(409).json({
                message: "Email already in use",
            });
        } else {
            res.status(500).json({
                message: "Failed to register user",
            });
        }
    }
});

router.post("/login", async (req, res) => {
    let { email, password } = req.body.user;

    try {
        let loginUser = await UserModel.findOne({
            where: {
                email: email,
            },
        })
    });

module.exports = router;