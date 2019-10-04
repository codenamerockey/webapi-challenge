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

router.put('/:id', (req, res) => {
  const projectId = req.params.id;
  const changes = req.body;
  dbAction
    .update(projectId, changes)
    .then(actions => {
      res.status(200).json(actions);
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
