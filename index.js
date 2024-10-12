const mongoose = require("mongoose");
const colors = require("colors");

const app = require("./app")


//Mongo Connection
const mongoUserName = "devuser";
const mongoPassword = "devpassword";
const mongoHost = "localhost";
const mongoPort = "27017";
const mongoDatabase = "iotdb";

var uri =
  "mongodb://" +
  mongoUserName +
  ":" +
  mongoPassword +
  "@" +
  mongoHost +
  ":" +
  mongoPort +
  "/" +
  mongoDatabase;
console.log(uri);

const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  authSource: "admin"
};

try {
  mongoose.connect(uri, options).then(
    () => {
      console.log("\n");
      console.log("*******************************".green);
      console.log("✔ Mongo Successfully Connected!".blue);
      console.log("*******************************".green);
      console.log("\n");
      //listener
      app.listen(3001, () => {
        console.log("*******************************".green);
        console.log("conectado en el puerto 3001".blue);

      });

    },
    (err) => {
      console.log("\n");
      console.log("*******************************".red);
      console.log("    Mongo Connection Failed    ".red);
      console.log("*******************************".red);
      console.log("\n");
      console.log(err);
    }
  );
} catch (error) {
  console.log("ERROR CONNECTING MONGO ");
  console.log(error);
}

