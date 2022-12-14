const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_CNN);

    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error starting database");
  }
};

module.exports = { dbConnection };
