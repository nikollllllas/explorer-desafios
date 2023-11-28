const knex = require('../db/knex')


class MoviesController {
  async create(req, res) {
    const { title, description, rating, tags } = req.body
    const { user_id } = req.params

    const [ movie_id ] = await knex('movies').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      movie_id,
      name,
      user_id
    })
  
    await knex('tags').insert(tagsInsert)

    res.json()
  }

}

module.exports = MoviesController