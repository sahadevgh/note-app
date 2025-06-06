const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connection Successful !");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
