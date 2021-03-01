const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(require('morgan')('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes'));

const server = app.listen(3000, () => console.log(`Listening on ${server.address().port}`));