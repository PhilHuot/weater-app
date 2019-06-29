module.exports = (app) => {
    const temperatures = require('../controllers/temperature.controller.js');

    // Create a new temperature
    app.post('/temperatures', temperatures.create);

    // Retrieve all temperatures
    app.get('/temperatures', temperatures.findAll);

    // Delete a temperature with temperatureId
    app.delete('/temperatures/:temperatureId', temperatures.delete);
};
