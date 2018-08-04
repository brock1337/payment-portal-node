const convict = require('convict')

const config = convict({
  env: {
    doc: 'Application Environment',
    env: 'NODE_ENV',
    format: ['production', 'development']
  },
  server: {
    ports: {
      http: {
        doc: 'HTTP Port',
        default: 5000
      },
      https: {
        doc: 'HTTPS Port',
        default: 5000
      }
    }
  },
  vendor: {
    stripe: {
      test: {
        doc: 'Test Stripe Payment Processing Configs',
        pk_test: 'pk_test_zbLxNJsZQXXkKJ7j6aJHg8Tl',
        sk_test: 'sk_test_NgC7l1AiPyk3vO5E31aN9mRb',
        card_tokens: {
          visa: 'tok_visa',
          mastercard: 'tok_mastercard',
          amex: 'tok_amex',
          discover: 'tok_discover'
        }
      },
      live: {
        doc: 'Production Stripe Payment Processing Configs',
        pk_live: '',
        sk_live: ''
      }
    }
  }
})

const env = config.get('env')
// Load config file into Convict
config.loadFile(require('path').resolve(`src/config/${env}.json`))

module.exports = config
