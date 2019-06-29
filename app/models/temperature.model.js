const mongoose = require('mongoose');

const TemperatureSchema = mongoose.Schema({
    temperature: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Temperature', TemperatureSchema);
