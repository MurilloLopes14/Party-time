const mongoose = require("mongoose");

const dbConn = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect("mongodb://localhost:27017/partytime");
    console.log("Database ready!");
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

module.exports = dbConn;
