const generateRandom = (num, data) => {
  let name = ''
  for (let index = 0; index < num - 1; index++) {
    name += data.charAt(Math.floor(Math.random() * data.length))
  }
  return name
}

module.exports = generateRandom
