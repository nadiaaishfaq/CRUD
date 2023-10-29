const express = require('express')
const router = express.Router()

//import controllers
const userControllers = require('../controllers/user')

router.post('/createUser', userControllers.createUser)
router.get('/getUsers', userControllers.getUser)
router.get('/getUserbyId/:id', userControllers.getUserById)
router.put('/updateUserById/:id', userControllers.updateById)
router.delete('/deleteUser/:id', userControllers.deleteUser)

module.exports = router