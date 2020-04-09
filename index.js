const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'test'
});
const table = 'pessoas';

app.use(express.json());

app.get('/', (req, res) => {

  con.query(
    "SELECT * FROM " + table,
    (err, result, fields) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.listen(8000);
