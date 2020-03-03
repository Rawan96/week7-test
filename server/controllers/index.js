const express = require("express");
const { getCities } = require("../database/queries/getCities");
const addCity = require("../database/queries/addCity");

const router = express.Router();


router.get("/cities", (req, res) => {
      getCities()
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => console.log('error happend here', err));
  });

  router.post('/add-city', (req, res) => {
      console.log(req.body);
    addCity(req.body).then(() => res.redirect('/')).catch(console.error);
  });

module.exports = router;
