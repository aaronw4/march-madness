
exports.up = function(knex) {
    return (
        knex.schema
            .createTable('teams', table => {
                table.increments();
                table.string('TeamName')
                table.decimal('AdjO');
                table.decimal('AdjD');
                table.decimal('AdjT');
                table.decimal('SOS');
            })
            .createTable('matchups', table => {
                table.increments();
                table.string('TeamName1'),
                table.string('TeamName2'),
                table.decimal('Pyth1'),
                table.decimal('Pyth2'),
                table.decimal('Odds1'),
                table.decimal('Odds2'),
                table.decimal('Score1'),
                table.decimal('Score2'),
                table.decimal('SosScore1'),
                table.decimal('SosScore2'),
                table.decimal('Spread'),
                table.decimal('Total'),
                table.decimal('SosSpread'),
                table.decimal('SosTotal')
            })
    )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('teams')
  )
};
