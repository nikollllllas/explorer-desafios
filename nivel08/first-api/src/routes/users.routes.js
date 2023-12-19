const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const upload = multer(uploadConfig.MULTER)

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()

const UsersController = require('../controllers/UsersController') 

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), usersController.updateAvatar )

module.exports = usersRoutes