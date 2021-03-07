var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongoose connected to ${MONGODB_URI}`);
  })
  .catch((e) => {
    console.log({ e });
  });

app.use('/api', indexRouter);

module.exports = app;
