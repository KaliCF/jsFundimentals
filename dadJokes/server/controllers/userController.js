const router = require('express').Router();
const { response } = require('express');
const { User } = require('../model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Testing endpoint
router.get('/test', (req, res) => {
    res.send('your message');
})

router.post('/register', (req, res) => {
    const { username, email, password } = req.body.username;

    User.create({
        username,
        email,
        password: bcrypt.hashSync(password, 13) //scrambles only newly made users
    })
        .then(user => res.status(201).json({ message: "New user created!", user }))
        .catch(error => res.status(500).json({ message: "Oops, something went wrong at /register", error }))

    //res.send('User register endpoint') //Can only 'send' response once.
})

//Login a user:
router.post('/login', (req, res) => {
    let { email, password } = req.body
    User.findOne({ where: { email } }) //calls the SQL table for users
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.jwtSecret, { expiresIn: '1d' })
                        res.status(200).json({
                            message: 'Login successful',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).json({ error: 'bad gateway' }) //use bad gateway to not give away PII
                    }
                })
            } else {
                res.status(500).json({ message: 'Failed to authenticate' })
            }
        })
})
/*
STEPS TO LOG IN
1. get information from the client
2. find a user with a matching email from server
3. compare password
4. if it matches, you log in
*/