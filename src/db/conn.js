const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentData')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log("Database is not connected",err));