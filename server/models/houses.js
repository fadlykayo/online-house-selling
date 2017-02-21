const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
  title: {
    type: String
  },
  specification: {
    type: String
  },
  price: {
    type: String
  },
  location: {
    type: String
  },
  picture: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Houses', HouseSchema)
