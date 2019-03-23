const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/config');

const connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('You hit it /!!');
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {
  console.log('You hit /register!!');
  console.log(req.body);
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password);
  const insertUser = `INSERT INTO users (name, email, password) 
		VALUES 
    (?,?,?);`;
  connection.query(insertUser, [name, email, hash], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.json({
        msg: 'registerUserSuccess',
      });
    }
  });
});

router.post('/signup', function(req, res) {
  console.log('You hit /signup!!');
  console.log(req.body);
  const { firstName, lastName, birthday, email, phone, zip } = req.body;
  const insertUser = `INSERT INTO volunteers (firstName, lastName, birthday, email, phone, zip) 
		VALUES 
    (?,?,?,?,?,?);`;
  connection.query(insertUser, [firstName, lastName, birthday, email, phone, zip], (error) => {
    if (error) {
      throw error;
    } else {
      res.json({
        msg: 'signUpVolunteerSuccess',
      });
    }
  });
});

module.exports = router;
