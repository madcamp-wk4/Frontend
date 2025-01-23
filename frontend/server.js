const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const setupSwagger = require("./setupSwagger");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'madcamp-wk4-db.cv3dstdglqkx.ap-northeast-2.rds.amazonaws.com',
  user: 'root',
  password: 'madcamp-wk4-0118',
  database: 'withYou',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/dateRecords', (req, res) => {
  const query = 'SELECT recordId, summarize, date, location, activity, image_url FROM DateRecords';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});