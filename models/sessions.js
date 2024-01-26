const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sessionId: String,
  userId: String,
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
