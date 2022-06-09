const generateRandom = require('../helpers/generateRandom')

exports.generateRandomUser = (req, res) => {
  const bigAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specChars = '@#$%&*!'
  const smallAlphabets = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const genderArr = ['male', 'female']

  const { num } = req.query
  const firstName = `${bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length))}${generateRandom(num, smallAlphabets)}`
  const lastName = `${bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length))}${generateRandom(num, smallAlphabets)}`
  const phone = generateRandom(11, numbers)
  const gender = genderArr[Math.round(Math.random())]
  const username = `${bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length))}${generateRandom(5, smallAlphabets)}${generateRandom(2, numbers)}`
  const password = `${generateRandom(5, smallAlphabets)}${generateRandom(1, specChars)}${generateRandom(2, numbers)}`
  const email = `${generateRandom(7, smallAlphabets)}@${generateRandom(5, smallAlphabets)}.com`
  res.json({ message: 'everything works well', name: { firstName, lastName }, gender, phone, username, email, password })
}
