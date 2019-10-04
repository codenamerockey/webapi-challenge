const express = require('express');

const router = express.Router();

const dbProject = require('../data/helpers/projectModel');
const dbAction = require('../data/helpers/actionModel');

//projectModel endpoints

router.get('/', (req, res) => {
  dbProject
    .get()
    .then()
    .catch();
});

// return a list of actions for a project, use getProjectActions()
router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
