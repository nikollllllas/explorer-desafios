const { Router } = require("express")

const usersRoutes = Router()

const UsersController = require("../controllers/UsersController") 

function myMiddleware(req, res, next) {
  console.log("I'm a middleware")
  if(req.body.isAdmin) {
    return res.json({ error: "User unauthorized" })
  }

  next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes