const router = require('express').Router()
import { Checkout } from '../../controllers'

// Route - /api/v1/checkout
router.get('/', (req, res) => {
  res.send('Checkout Routes')
})

router.use('/test', Checkout.handleTestCharge)

module.exports = router
