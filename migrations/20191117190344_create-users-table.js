
exports.up = function (knex) {
  //change you want to make
  return knex.schema.createTable('car', tbl => {
    tbl.increments();
    tbl.text('vin', 128)
      .unique()
      .notNullable();
    tbl.text('make', 128)
      .unique()
      .notNullable();
    tbl.text('model', 128)
    tbl.text('mileage')
  });
};

exports.down = function (knex) {
  //undoing that change 
  return knex.schema.dropTableIfExists('car');
};

// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.