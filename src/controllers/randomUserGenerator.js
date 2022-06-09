const generateRandom = require('../helpers/generateRandom')

exports.generateRandomUser = (req, res) => {
  const bigAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const specChars = '@#$%&*!'
  const smallAlphabets = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const genderArr = ['male', 'female']
  const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

  const { num } = req.query
  const firstName = `${bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length))}${generateRandom(num, smallAlphabets)}`
  const lastName = `${bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length))}${generateRandom(num, smallAlphabets)}`
  const phone = generateRandom(11, numbers)
  const gender = genderArr[Math.round(Math.random())]
  const username = `${bigAlphabets.charAt(Math.floor(Math.random() * bigAlphabets.length))}${generateRandom(5, smallAlphabets)}${generateRandom(2, numbers)}`
  const password = `${generateRandom(5, smallAlphabets)}${generateRandom(1, specChars)}${generateRandom(2, numbers)}`
  const email = `${generateRandom(7, smallAlphabets)}@${generateRandom(5, smallAlphabets)}.com`
  const dob = `${days[Math.floor(Math.random() * days.length)]}-${months[Math.floor(Math.random() * months.length)]}-${generateRandom(2, numbers)}`

  res.json({ status: 200, bioData: { gender, dob, phone, name: { firstName, lastName } }, username, email, password })
}
