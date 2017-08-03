
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('activities', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('description');
      table.enu('type', ['rest', 'sweat', 'nutrition', 'personal', 'buddy']);
      table.boolean('status').defaultTo(false);
      table.boolean('is_canceled').defaultTo(false);
      table.integer('points').defaultTo(5);
      table.date('date');
      table.integer('buddy_id');
      table.string('buddy_avatar');
      table.string('buddy_initials');
      table.integer('buddy_ref');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities');
};
