const Houses = require('../models/houses')

module.exports = {
  createHouse: (req, res) => {
    Houses.create({
      title: req.body.title,
      specification: req.body.specification,
      price: req.body.price,
      location: req.body.location,
      picture: req.body.picture
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  getHouses: (req, res) => {
    Houses.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  getHouse: (req, res) => {
    Houses.findOne({
      _id: req.params.id
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  updateHouse: (req, res) => {
    Houses.findOneAndUpdate({
      _id: req.params.id
    }, {
      title: req.body.title,
      specification: req.body.specification,
      price: req.body.price,
      location: req.body.location,
      picture: req.body.picture
    }, {
      new: true
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  deleteHouse: (req, res) => {
    Houses.findOneAndRemove({
      _id: req.params.id
    }).then(function () {
      res.send({message: `Deleted House with ID: ${req.params.id}`})
    }).catch(function (err) {
      res.send({message: 'Error data not found'})
    })
  }
}
