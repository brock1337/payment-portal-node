const router = require('express').Router()

// Route - /api/v1/
router.get('/', (req, res) => {
  res.send('Payment Portal Version 1 API Base Route')
})

// Route - /api/v1/users
router.use('/users', require('./user'))

// Route - /api/v1/checkout
router.use('/checkout', require('./checkout'))

module.exports = router
