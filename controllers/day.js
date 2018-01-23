const day = require('../models/day')

module.exports = {
  create: (req,res) => {
    return day.create(req.body)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  read: (req,res) => {
    const query = req.params.id ? {_id: req.params.id} : {}
    return day.find(query)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  update: (req,res) => {
    return day.findByIdandupdate(req.params.id, req.body, {new: true})
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  delete: (req,res) => {
    return day.findByIdandupdate(req.params.id, {isDeleted: true})
    .then(doc => res.status(200))
    .catch(err => res.status(500).json(err))
  },
};
