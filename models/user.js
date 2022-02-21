import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  lastname: { type: String, required: true, maxlength: 100 },
  username: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
    unique: true,
  },
  email: { type: String, required: true, maxlength: 100, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  pro: { type: Boolean, default: true },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
