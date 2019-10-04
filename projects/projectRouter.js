const express = require('express');

const router = express.Router();

const dbProject = require('../data/helpers/projectModel');
const dbAction = require('../data/helpers/actionModel');

//projectModel endpoints

router.get('/', (req, res) => {
  dbProject
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'error while getting projects from the database' });
    });
});

// return a list of actions for a project, use getProjectActions()
router.get('/:id/actions', (req, res) => {
  dbProject
    .getProjectActions(req.params.id)
    .then(actions => {
      if (actions.length > 0) {
        res.status(200).json(actions);
      } else {
        res
          .status(404)
          .json({ message: 'action with specified id does not exist' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Actions information could not be retrieved' });
    });
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
