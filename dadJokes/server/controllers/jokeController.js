const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send(`PUNctual timing`));

module.exports = router;