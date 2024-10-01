const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:%TboK15G3Zpx9T0VM%3E@cluster0.wvyjj.mongodb.net/"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLenght: 6,
    required: true,
  },
  firstName: {
    type: String,
    minLenght: 6,
    required: true,
  },
  lastName: {
    type: String,
    minLenght: 6,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
