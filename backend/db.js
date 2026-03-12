const { Pool } = require("pg")

const pool = new Pool({
  user:"postgres",
  host:"localhost",
  database:"weddingdb",
  password:"anuhya",
  port:5432
})

module.exports = pool