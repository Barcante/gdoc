const mongoose = require('mongoose');

const ObraSchema = new mongoose.Schema({
    codigo_obra: Int8Array,
    nome: String,
    responsavel: String,
    inicio: String,
    termino: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Obra', ObraSchema);