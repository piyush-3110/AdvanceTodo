const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((error) => {
      console.log("DB NOT CONNECTED");
      console.log(error);
      process.exit(1);
    });
};
