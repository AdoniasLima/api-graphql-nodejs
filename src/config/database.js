const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);

module.exports = knex;

/*
knex("users").insert({
    name: "Test",
    email: "test@test.com",
    password: "teste"
}).then(data => console.log(data));

knex("users").select("*").then(result => console.log(result));
*/