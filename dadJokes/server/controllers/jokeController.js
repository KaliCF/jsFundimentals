const router = require("express").Router();
const { JokeModel } = require("../models");

router.get('/', (req, res) => res.send(`PUNctual timing`));

router

module.exports = router;