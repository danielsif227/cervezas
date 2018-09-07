const cervezas = require('./cervezas.json')
const uniqueRandomArray = requeire('.unique-random-array')

module.exports = {
  todas: cervezas
  alazar: uniqueRandomArray(cervezas)
}
