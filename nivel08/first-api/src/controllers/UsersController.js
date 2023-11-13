const AppError = require("../utils/AppError")
const { hash } = require('bcryptjs')

const sqliteConnection = require('../database/sqlite')

class UsersControllers {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqliteConnection()

    const userAlreadyExists = await database.get(`
      SELECT * FROM users
      WHERE email = (?)
    `, [email])

    if(userAlreadyExists) {
      throw new AppError("Email already registered")
    }

    const hashedPassword = await hash(password, 8)

    await database.run(`
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `, [name, email, hashedPassword])

    return res.status(201).json()
  }

  async update(req, res) {
    const { name, email, password, old_password} = req.body
    const { id } = req.params

    const database = await sqliteConnection()
    const user = await database.get(`
      SELECT * FROM users
      WHERE id = (?)
    `, [id])

    if(!user) {
      throw new AppError("User not found. :(")
    }

    const userWithUpdatedEmail = await database.get(`
      SELECT * FROM users
      WHERE email = (?)
    `, [email])

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Email already registered.")
    }

    user.name = name
    user.email = email

    if(password && !old_password) {`
      throw new AppError("Old password is required.")
      `
    }

    await database.run(`
      UPDATE users SET
        name = (?),
        email = (?)
        WHERE id = (?)
      `, [user.name, user.email, id]) 

      return res.json(user)
  }
}

module.exports = UsersControllers