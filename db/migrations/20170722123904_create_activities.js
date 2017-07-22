
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('activities', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('description');
      table.enu('type', ['rest', 'sweat', 'nutrition', 'personal', 'wildcard']);
      table.boolean('status').defaultTo(false);
      table.integer('points').defaultTo(5);
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities');
};
