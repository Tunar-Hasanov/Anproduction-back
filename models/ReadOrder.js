const mongoose = require('mongoose');

const readOrderSchema = new mongoose.Schema({
  adSoyad: String,
  mobilNomre: String,
  tesvir: String,
});

module.exports = mongoose.model('ReadOrder', readOrderSchema);
