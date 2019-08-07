const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');
const config = require('../config/config');

const connection = mysql.createConnection(config);
connection.connect();

// Nodemailer
const ejs = require('ejs');
const moment = require('moment');
const nodemailer = require('nodemailer');
const creds = require('../config/mail');

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

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
      const formattedBirthday = moment.utc(birthday).format('LL');
      const ejsObjectAdmin = {
        name: `${firstName} ${lastName}`,
        formattedBirthday,
        email,
        phone,
        message,
      }
      ejs.renderFile(__dirname + '/adminEmail.ejs', ejsObjectAdmin, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const mailToAdmin = {
            from: 'SmileUp! Volunteer Page',
            to: creds.USER,
            subject: `New SmileUp! Volunteer: ${firstName} ${lastName}`,
            html: data,
          };
          transporter.sendMail(mailToAdmin, (err2) => {
            if (err2) {
              res.json({
                msg: 'mailToAdminFail',
              });
            } else {
              ejs.renderFile(__dirname + '/volunteerEmail.ejs', {}, (err3, data) => {
                if (err3) {
                  console.log(err3);
                } else {
                  const mailToVolunteer = {
                    from: 'SmileUp!',
                    to: email,
                    subject: `SmileUp! welcomes you!`,
                    html: data,
                  };
                  transporter.sendMail(mailToVolunteer, (err4) => {
                    if (err4) {
                      res.json({
                        msg: 'mailToVolunteerFail',
                      });
                    }
                  });
                }
              })
            }
          });
        }
      });
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
  const selectionQuery = `SELECT * FROM volunteers
    WHERE deleted = ?`;
  connection.query(selectionQuery, [0], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.json(results);
    }
  });
});

router.post('/deletevolunteer', (req, res) => {
  const { id } = req.body;
  const updateQuery = `UPDATE volunteers
    SET deleted = ?
    WHERE id = ?;`;
  connection.query(updateQuery, [1, id], (error, results) => {
    if (error) {
      throw error;
    } else {
      const selectionQuery = `SELECT * FROM volunteers
        WHERE deleted = ?`;
      connection.query(selectionQuery, [0], (error, results) => {
        if (error) {
          throw error;
        } else {
          res.json(results);
        }
      });
    }
  })
});

module.exports = router;
