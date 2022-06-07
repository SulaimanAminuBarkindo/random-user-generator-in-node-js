const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log('Error', error.message)
  } else {
    console.log(`server started at port ${process.env.PORT}`)
  }
})
