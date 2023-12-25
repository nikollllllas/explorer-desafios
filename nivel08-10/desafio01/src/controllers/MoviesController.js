const knex = require('../db/knex')


class MoviesController {
  async create(req, res) {
    const { title, description, rating, tags } = req.body
    const { user_id } = req.params

    const [ movie_id ] = await knex('movies').insert({
      title,
      description,
      rating,
      user_id,
    })
    
    const tagsInsert = tags.map(name => {
      return {
        name,
        user_id,
        movie_id,
      }
    })
  
    await knex('tags').insert(tagsInsert)

    res.json()
  }

  async show(req, res) {
    const { id } = req.params

      const movie = await knex('movies').where({ id }).first()
      const tags = await knex('tags').where({ movie_id: id }).orderBy('name')

      return res.json({
        ...movie,
        tags
      })
  }

  async delete(req, res) {
    const { id } = req.params
    
      await knex('movies').where({ id }).delete()     

      return res.json() 
  }

  async index(req, res) {
    const { title, tags } = req.query
    const { user_id } = req.params

    if(tags) {
      const filteredTags = tags.split(',').map(tag => tag.trim())
    
      movies = await knex('tags')
        .select([
          'movies.id',
          'movies.title',
          'movies.user_id'
        ])
        .where('movies.user_id', user_id)
        .whereLike('movies.title', `%${title}%`)
        .whereIn('tags.name', filteredTags)
        .innerJoin('movies', 'movies.id', 'tags.movie_id')
        .orderBy('movies.title')
    } else {
      movies = await knex('movies')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title')
    }

    const userTags = await knex('tags').where({ user_id })
    const moviesWithTags = movies.map(movies => {
      const movieTags = userTags.filter(tag => tag.movie_id === movies.id)

      return {
        ...movies, 
        tags: movieTags
      }
    })

    return res.json(moviesWithTags)
  }
}

module.exports = MoviesController