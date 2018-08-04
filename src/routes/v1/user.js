const router = require('express').Router()

// Route - /api/v1/users
router.get('/', (req, res) => {
  res.send('User Routes')
})

module.exports = router
