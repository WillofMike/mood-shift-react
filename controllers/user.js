const user = require('../models/user')

module.exports = {
  create: (req,res) => {
    return user.create(req.body)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  read: (req,res) => {
    const query = req.params.id ? {_id: req.params.id} : {}
    return user.find(query)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  update: (req,res) => {
    return user.findByIdandupdate(req.params.id, req.body, {new: true})
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  delete: (req,res) => {
    return user.findByIdandupdate(req.params.id, {isDeleted: true})
    .then(doc => res.status(200))
    .catch(err => res.status(500).json(err))
  },
};
