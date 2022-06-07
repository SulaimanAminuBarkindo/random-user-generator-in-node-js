const express = require('express')
const router = express.Router()
const randomUserController = require('../controllers/randomUserGenerator')

router.get('generate-random-user', randomUserController.generateRandomUser)

module.exports = router
