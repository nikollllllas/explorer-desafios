exports.up = knex => knex.schema.createTable('tags', table => {
  table.increments('id')
  table.string('name').notNullable()
  table.integer('user_id').references('id').inTable('users')
  table.integer('movie_id').references('id').inTable('movies').onDelete('CASCADE')
})


exports.down = knex => knex.schema.dropTable('tags')
