import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {

  const [inquiries, setInquiries] = useState([])

  useEffect(() => {

    axios.get("http://localhost:5000/inquiries")
      .then(res => setInquiries(res.data))
      .catch(err => console.log(err))

  }, [])

  return (

    <div style={{
      minHeight:"100vh",
      padding:"40px",
      background:"linear-gradient(135deg,#fbc2eb,#a6c1ee)"
    }}>

      <h1 style={{
        marginBottom:"30px",
        color:"#4c1d95"
      }}>
        Your Inquiries 📩
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>

        {inquiries.map((item) => (

          <div
            key={item.id}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"12px",
              boxShadow:"0 10px 25px rgba(0,0,0,0.15)",
              transition:"0.3s",
              cursor:"pointer"
            }}

            onMouseEnter={(e) =>
              e.currentTarget.style.transform="scale(1.05)"
            }

            onMouseLeave={(e) =>
              e.currentTarget.style.transform="scale(1)"
            }
          >

            <h3 style={{color:"#7c3aed"}}>
              {item.name}
            </h3>

            <p style={{color:"#555"}}>
              📧 {item.email}
            </p>

            <p style={{
              marginTop:"10px",
              background:"#f3f4f6",
              padding:"10px",
              borderRadius:"8px"
            }}>
              {item.message}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Dashboard