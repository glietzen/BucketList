const express = require('express');
const router = express.Router();
const User = require('./../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport')

router.get('/test', (req,res) => res.json({msg: 'Users Works'}));

router.post('/register', (req,res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(400).json({email: 'Email already exists'})
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10 ,(err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

router.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    // FIND USER BY EMAIL
    User.findOne({email})
        .then(user => {
            // CHECK FOR USER
            if(!user) {
                return res.status(404).json({email: 'User not found'});
            }

            // CHECK PASSWORD
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        // USER MATCHED & CREATE PAYLOAD
                        const payload = {
                            id: user.id,
                            name: user.name
                        }

                        // SIGN TOKEN
                        jwt.sign(payload, 'kucodingbootcamp', {expiresIn: 3600}, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        });
                    } else {
                        return res.status(400).json({password: 'Password incorrect'});
                    }
                });

        });
})

// GET CURRENT USER

router.get('/current', passport.authenticate('jwt', {session: false}), (req,res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})

module.exports = router;