const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  tof: { type: [String], required: true },
  profile_photo: { type: String, required: true },
  bio: { type: String, required: true },
  languages: { type: [String], required: true },
  current_role: { type: String, required: true },
  user_experience: { type: Number, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
