const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(require('morgan')('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/routes/star')(app);


const db = require("./src/models");
db.sequelize.sync();


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Listening on ${server.address().port}`));