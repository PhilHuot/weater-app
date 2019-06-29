const Temperature = require('../models/temperature.model.js');

// Create and Save a new Temperature
exports.create = (req, res) => {
    // Validate request
    if (!req.body.temperature) {
        return res.status(400).send({
            message: "temperature can not be empty"
        });
    }

    // Create a Temperature
    const temperature = new Temperature({
        temperature: req.body.temperature
    });

    // Save Temperature in the database
    temperature.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Temperature."
        });
    });
};

// Retrieve and return all temperatures from the database.
exports.findAll = (req, res) => {
    Temperature.find()
        .then(temperatures => {
            res.send(temperatures);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving temperatures."
        });
    });
};

// Delete a temperature with the specified temperatureId in the request
exports.delete = (req, res) => {
    Temperature.findByIdAndRemove(req.params.temperatureId)
        .then(temperature => {
            if(!temperature) {
                return res.status(404).send({
                    message: "Temperature not found with id " + req.params.temperatureId
                });
            }
            res.send({message: "Temperature deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Temperature not found with id " + req.params.temperatureId
            });
        }
        return res.status(500).send({
            message: "Could not delete temperature with id " + req.params.temperatureId
        });
    });
};
