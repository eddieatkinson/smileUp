const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');
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
  const { firstName, lastName, email, password } = req.body;
  const hash = bcrypt.hashSync(password);
  const uid = randToken.uid(60);
  const insertUser = `INSERT INTO users (firstName, lastName, email, password, uid) 
		VALUES 
    (?,?,?,?, ?);`;
  connection.query(insertUser, [firstName, lastName, email, hash, uid], (error) => {
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
  const { firstName, lastName, birthday, email, phone, zip, guardianName, school, message } = req.body;
  const insertUser = `INSERT INTO volunteers (firstName, lastName, birthday, email, phone, zip, guardianName, school, message) 
		VALUES 
    (?,?,?,?,?,?,?,?,?);`;
  connection.query(insertUser, [firstName, lastName, birthday, email, phone, zip, guardianName, school, message], (error) => {
    if (error) {
      throw error;
    } else {
      res.json({
        msg: 'signUpVolunteerSuccess',
      });
    }
  });
});

router.post('/signin', function(req, res) {
  console.log('You hit /signin!!');
  console.log(req.body);
  const { email, password } = req.body;
  const checkUser = `SELECT * FROM users
    WHERE email = ?`;
  connection.query(checkUser, [email], (error, results) => {
    if (error) {
      throw error;
    } else if (results.length === 0) {
      res.json({
        msg: 'badLogin',
      });
    } else {
      const checkHash = bcrypt.compareSync(password, results[0].password);
      if (checkHash) {
        const token = randToken.uid(60);
        const name = results[0].firstName;
        const statusId = results[0].statusId;
        res.json({
          msg: 'signInSuccess',
          token,
          name,
          statusId,
        });
      } else {
        res.json({
          msg: 'badPassword',
        });
      }
    }
  });
});

router.get('/volunteerinfo', (req, res) => {
  console.log('You hit /volunteerinfo!!');
  const selectionQuery = `SELECT * FROM volunteers`;
  connection.query(selectionQuery, [], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
