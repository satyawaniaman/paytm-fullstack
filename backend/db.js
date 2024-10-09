import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://admin:TboK15G3Zpx9T0VM@cluster0.wvyjj.mongodb.net/paytm";

console.log("Attempting to connect to MongoDB at:", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

export { User, Account };
