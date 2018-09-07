const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
var _ = require('lodash')
module.exports = {
  todas: cervezas,
  ordenadas: _.sortBy(cervezas, ['nombre']),
  alAzar: uniqueRandomArray(cervezas)
}
