/* global describe it */
const expect = require('chai').expect
const cervezas = require('../src/index')

describe('cervezas', () => {
  describe('La lista de todas', () => {
    it('Debería ser un array de objetos', () => {
      // utiliza el método Array.prototype.every()
      expect(cervezas.todas).to.satisfy(isArrayOfObjects)
    })
    it('Debería incluir la cerveza Ambar', () => {
      // utiliza el método Array.prototype.some()
      expect(cervezas.todas).to.satisfy(contieneAmbar)
    })
  })
  describe('Elegir una cerveza al azar', () => {
    it('Debería mostrar un elemento de la lista de cervezas', () => {

    })
  })
})

const isArrayOfObjects = array => {
  return array.every(item => {
    return typeof item === 'object'
  })
}

const contieneAmbar = array => array.some(
  (cerveza) => cerveza.nombre === 'ÁMBAR ESPECIAL'
)