const generateRandom = require('../helpers/generateRandom')

exports.generateRandomUser = (req, res) => {
  const bigAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const smallAlphabets = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'

  const { num } = req.query
  const firstName = bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length)) + generateRandom(num, smallAlphabets)
  const lastName = bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length)) + generateRandom(num, smallAlphabets)
  const phone = generateRandom(11, numbers)

  res.json({ message: 'everything works well', name: { firstName, lastName }, phone })
}
