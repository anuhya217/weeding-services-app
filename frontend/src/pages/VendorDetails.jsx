import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function VendorDetails() {

  const { id } = useParams()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await axios.post("http://localhost:5000/inquiry", form)

      alert("Inquiry sent successfully!")

      setForm({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      console.error(error)
      alert("Error sending inquiry")
    }
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Vendor Details</h1>

      <div style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px"
      }}>

        <h2>Dream Photography</h2>
        <p>Category: Photography</p>
        <p>Location: Hyderabad</p>
        <p>Price: ₹50,000</p>

      </div>

      <h2 style={{ marginTop: "30px" }}>Send Inquiry</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "10px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            background: "#ff4d6d",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Send Inquiry
        </button>

      </form>

    </div>
  )
}

export default VendorDetails