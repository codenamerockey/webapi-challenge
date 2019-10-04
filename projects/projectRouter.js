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

router.post('/', (req, res) => {
  dbProject
    .insert(req.body)
    .then(newProject => {
      if (!req.body.name || !req.body.description) {
        res.status(400).json({
          message: 'Please provide a name and description for the project.'
        });
      } else {
        res.status(201).json(newProject);
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'There was an error while saving the post to the database'
      });
    });
});

router.put('/:id', (req, res) => {
  const projectId = req.params.id;
  const changes = req.body;
  dbProject
    .update(projectId, changes)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: 'There was an error while updating the post to the database'
      });
    });
});

router.delete('/:id', (req, res) => {
  dbProject
    .remove(req.params.id)
    .then(() => {
      res.status(204).json(req.params.id);
    })
    .catch(err => {
      res.status(500).json({
        message:
          'There was an error while deleting the project from the database'
      });
    });
});

module.exports = router;
