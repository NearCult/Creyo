'use client';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const User = require('./userModel'); // Adjust path as needed
const cors= require('cors');


const app = express();
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("DB Connection Error:", err));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Routes
// GET: Fetch all users
app.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users");
  }
});

// POST route to save user data
app.post('/', upload.single('profile_photo'), async (req, res) => {
    try {
      const newUser = new User({
        tof: req.body.tof.split(','), // Assuming `tof` is a comma-separated string
        profile_photo: req.file ? `/uploads/${req.file.filename}` : null, // Store file path
        bio: req.body.bio,
        languages: req.body.languages.split(','), // Assuming `languages` is a comma-separated string
        current_role: req.body.current_role,
        user_experience: Number(req.body.user_experience),
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser); // Return saved user as response
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).send("Error creating user");
    }
  });
  

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on port', port));
