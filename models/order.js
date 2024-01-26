const mongoose = require('mongoose');

const siparisSchema = new mongoose.Schema({
    adSoyad: String,
    mobilNomre: String,
    tesvir: String
});

const Siparis = mongoose.model('Siparis', siparisSchema);
module.exports = Siparis;