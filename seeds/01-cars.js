
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('car').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        { vin: "32e893r89r", make: "toyota", model: "camry", mileage: "893893" },
        { vin: "545", make: "idk", model: "camry", mileage: "893893" }
      ]);
    });
};
