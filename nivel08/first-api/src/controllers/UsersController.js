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
}

module.exports = UsersControllers