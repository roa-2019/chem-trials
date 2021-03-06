const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getChems()
  
    .then(chems => {
      res.json({chems})
    })
})

module.exports = router
