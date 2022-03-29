const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const StudentSchema = require('../models/Student')

const connectDB = async () => {
  try {
    //mongoose connect to mongoDB by passing parameter i.e db.
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected ..");
    //fetch data from mongodb
    //sort subject into accending order
    const results = await StudentSchema.find({})
    .sort({ subject: 1 })

    console.log('RESULTS:', results)

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;