import { stripeService } from '../services'

const Checkout = {
  handleTestCharge: (req, res) => {
    stripeService.chargeCard('tok_visa')
    .then(results => {
      res.send(results)
    })
    .catch(err => {
      console.log(`\n ERROR --> ${err}`)
      res.send(err)
    })
  }
}

export default Checkout
