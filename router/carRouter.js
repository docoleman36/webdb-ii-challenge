const express = require('express');

const db = require('../db-config');

const router = express.Router();

router.get('/', (req, res) => {
  db('car')
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('car').where({ id }).first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('car').insert(carData)
    .then(ids => {
      db('car').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data", error: err });
    });
});

module.exports = router;