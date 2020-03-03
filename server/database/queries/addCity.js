const connection = require('../config/connection');


const addCity = (data) => connection.query('INSERT INTO cities (name, city) values ($1, $2)',[data.name, data.city]);



module.exports = addCity;
