import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Signup() {
    const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
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

     await axios.post("http://localhost:5000/signup", form)

navigate("/")
    

    setTimeout(() => {
  navigate("/")
}, 500)
      setForm({
        name:"",
        email:"",
        password:""
      })

    } catch (error) {
      alert("Signup failed")
    }
  }

  return (

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"linear-gradient(135deg,#fbc2eb,#a6c1ee)"
    }}>

      <div style={{
        display:"flex",
        width:"850px",
        borderRadius:"15px",
        overflow:"hidden",
        boxShadow:"0 15px 40px rgba(0,0,0,0.2)",
        background:"white"
      }}>

        {/* LEFT IMAGE SECTION */}

        <div style={{
          flex:1,
          backgroundImage:"url('https://images.unsplash.com/photo-1519741497674-611481863552')",
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}/>

        {/* RIGHT FORM SECTION */}

        <div style={{
          flex:1,
          padding:"40px"
        }}>

          <h2 style={{
            marginBottom:"20px",
            color:"#7c3aed"
          }}>
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={inputStyle}
            />

            <button style={btnStyle}>
              Signup
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

const inputStyle = {
  width:"100%",
  padding:"12px",
  marginBottom:"15px",
  borderRadius:"8px",
  border:"1px solid #ddd",
  outline:"none"
}

const btnStyle = {
  width:"100%",
  padding:"12px",
  border:"none",
  borderRadius:"8px",
  background:"linear-gradient(135deg,#ec4899,#7c3aed)",
  color:"white",
  fontWeight:"bold",
  cursor:"pointer"
}

export default Signup