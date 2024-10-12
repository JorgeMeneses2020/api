//requires
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// ROUTES
const userRoute = require('./routes/user.route.js');
// const testRoute = require('./routes/test.route.js');
// const templateRoute = require('./routes/template.route.js')
//instances
const app = express();

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());


//  app.use('/api', userRoute);

module.exports = app;
