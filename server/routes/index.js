housesvar express = require('express')
var router = express.Router()
const houseController = require('../controllers/houses')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Go to http://localhost:8080/')
})

router.get('/api', function (req, res, next) {
  res.send({
    endpoints: [
      '/api/houses',
      '/api/houses/:id'
    ]
  })
})

router.get('/api/houses', houseController.getHouses)

router.get('/api/houses/:id', houseController.getHouse)

router.post('/api/houses', houseController.createHouse)

router.put('/api/houses/:id', houseController.updateHouse)

router.delete('/api/houses/:id', houseController.deleteHouse)

module.exports = router
