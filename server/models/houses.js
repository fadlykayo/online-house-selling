const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  specification: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  picture: {
    type: String
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Houses', HouseSchema)
