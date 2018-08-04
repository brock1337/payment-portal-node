const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Payment Portal')
})

// Route - /api/v1/
router.use('/api/v1', require('./v1/index'))

module.exports = router
