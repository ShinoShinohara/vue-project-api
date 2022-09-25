/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("users", (t) => {
    t.increments();
    t.string("username").unique().notNullable();
    t.string("email").unique().notNullable();
    t.string("password").notNullable();
    t.dateTime("created_at");
    t.dateTime("updated_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("users");
