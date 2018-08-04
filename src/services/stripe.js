import _ from 'lodash'
const config = require('../config')
const stripe = require('stripe')(config.get('vendor.stripe.test.sk_test'))

const chargeCard = async card => {
  if (_.isNil(card)) {
    return Promise.reject('Card information or token required')
  }
  
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'brock@8thwonder.io'
  })
  
  return charge
}

const stripeService = {
  chargeCard
}

export default stripeService
