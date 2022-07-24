const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongo = require("./config/mongodb");
dotenv.config({ path: "./config/config.env" });
const profileRoute = require("./routes/profileRoute");
const registerRoute = require("./routes/registerRoute");

mongo();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST,PUT,GET");
  res.header("Access-Control-Allow-Headers","*")
  next();
});

app.use("/api/profile", profileRoute);
app.use("/api/register", registerRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is runnig at port ${process.env.PORT}`);
});
