const { compare } = require('bcryptjs')
const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body	

    const user = await knex('users').where({ email }).first()

    const passwordMatched = await compare(password, user.password)
    
    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401)
    }

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401)
    }

    return res.json(user)
  }
}

module.exports = SessionsController