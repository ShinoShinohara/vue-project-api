const { default: knex } = require("knex");

exports.seed = (knex) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          id: 1,
          email: "vshinohara@gmail.com",
          username: "shino",
          password:
            "$2a$12$28Shq8q./DPzkGOOORykj.0h5dPphYwSwKPVQx3depSqPyexLrj70",
        },
      ]);
    });
};
