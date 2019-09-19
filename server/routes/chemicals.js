const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getChems()
  .then(chems => {
      res.json({chems})
    })
})

router.get('/calculator/:id', (req, res) => {
  db.getChemById(req.params.id)
  .then(chem => {
    res.json(chem)
  })
})

module.exports = router
