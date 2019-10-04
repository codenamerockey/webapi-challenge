const express = require('express');

const router = express.Router();

const dbAction = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
  dbAction
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'error while retrieving actions from the database' });
    });
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
