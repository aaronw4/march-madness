
exports.up = function(knex) {
    return (
        knex.schema
            .createTable('teams', table => {
                table.increments();
                table.string('Team Name')
                table.decimal('AdjO');
                table.decimal('AdjD');
                table.decimal('AdjT');
            })
    )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('teams')
  )
};
