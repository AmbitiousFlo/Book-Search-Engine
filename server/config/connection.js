const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:<Password123>@cluster0.cgk8ga0.mongodb.net/googlebooks');

module.exports = mongoose.connection;
