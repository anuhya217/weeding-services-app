const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "weddingdb",
  password: "anuhya",
  port: 5432,
})

app.get("/", (req, res) => {
  res.send("Wedding API running")
})

/* ---------------- SIGNUP ---------------- */

app.post("/signup", async (req, res) => {

  const { name, email, password } = req.body

  try {

    await pool.query(
      "INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
      [name, email, password]
    )

    res.json({ message: "User registered successfully" })

  } catch (error) {

    console.error(error)

    res.status(500).json({ message: "Signup failed" })

  }

})

/* ---------------- LOGIN ---------------- */

app.post("/login", async (req, res) => {

  const { email, password } = req.body

  try {

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1 AND password=$2",
      [email, password]
    )

    if (result.rows.length > 0) {

      res.json({ message: "Login successful", user: result.rows[0] })

    } else {

      res.status(401).json({ message: "Invalid credentials" })

    }

  } catch (error) {

    console.error(error)

    res.status(500).json({ message: "Login error" })

  }

})

/* ---------------- INQUIRY ---------------- */

app.post("/inquiry", async (req, res) => {

  const { name, email, message } = req.body

  try {

    await pool.query(
      "INSERT INTO inquiries(name,email,message) VALUES($1,$2,$3)",
      [name, email, message]
    )

    res.json({ message: "Inquiry saved successfully" })

  } catch (error) {

    console.error(error)

    res.status(500).json({ message: "Inquiry failed" })

  }

})
/* ---------------- GET ALL INQUIRIES ---------------- */

app.get("/inquiries", async (req, res) => {

  try {

    const result = await pool.query("SELECT * FROM inquiries")

    res.json(result.rows)

  } catch (error) {

    console.error(error)

    res.status(500).json({ message: "Error fetching inquiries" })

  }

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})