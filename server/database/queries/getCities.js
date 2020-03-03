const Connection = require("../config/connection");

const getCities= () => {
    return Connection.query(`SELECT * FROM cities;`);
};


module.exports = { getCities };
