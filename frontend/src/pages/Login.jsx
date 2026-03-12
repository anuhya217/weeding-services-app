import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

  const [form, setForm] = useState({
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

      const res = await axios.post("https://weeding-services-app.onrender.com/login", form)

    navigate("/dashboard")

      console.log(res.data.user)

    } catch (error) {

      alert("Invalid email or password")

    }
  }

  return (

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"linear-gradient(135deg,#a18cd1,#fbc2eb)"
    }}>

      <div style={{
        display:"flex",
        width:"850px",
        borderRadius:"15px",
        overflow:"hidden",
        boxShadow:"0 20px 45px rgba(0,0,0,0.25)",
        background:"white"
      }}>

        {/* LEFT IMAGE */}

        <div style={{
          flex:1,
          backgroundImage:"url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486')",
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}/>

        {/* LOGIN FORM */}

        <div style={{
          flex:1,
          padding:"40px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center"
        }}>

          <h2 style={{
            marginBottom:"20px",
            color:"#7c3aed"
          }}>
            Welcome Back 💍
          </h2>

          <form onSubmit={handleSubmit}>

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
              Login
            </button>

          </form>

          <p style={{marginTop:"15px"}}>
            Don't have an account?{" "}
            <Link to="/signup" style={{color:"#7c3aed",fontWeight:"bold"}}>
              Signup
            </Link>
          </p>

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
  outline:"none",
  transition:"0.3s"
}

const btnStyle = {
  width:"100%",
  padding:"12px",
  border:"none",
  borderRadius:"8px",
  background:"linear-gradient(135deg,#ec4899,#7c3aed)",
  color:"white",
  fontWeight:"bold",
  cursor:"pointer",
  transition:"0.3s"
}

export default Login