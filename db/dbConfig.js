const pgp = require("pg-promise");
require("dotenv").config();

const db = pgp(cn);

db.connect()
  .then((obj) => {
    console.log("Postgres connection established");
    obj.done();
  })
  .catch((e) => {
    console.log("ERROR:", e.message || e);
  });

module.exports = db;
