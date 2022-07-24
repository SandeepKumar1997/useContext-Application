const mongoose = require("mongoose");

const connectMongoose = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connection is establised at ${conn.connection.host}`);
  } catch (error) {
    console.log("Error :" + error.message);
  }
};

module.exports = connectMongoose;
