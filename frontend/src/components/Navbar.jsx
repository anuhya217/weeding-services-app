import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.8)",
        borderBottom: "1px solid #fbcfe8"
      }}
    >
      {/* LOGO */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          background: "linear-gradient(135deg,#db2777,#7c3aed)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        WedConnect 💍
      </h2>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
          fontWeight: "500"
        }}
      >
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/vendors">Vendors</Link>
        <Link style={linkStyle} to="/dashboard">Dashboard</Link>

        <Link to="/login">
          <button style={loginBtn}>Login</button>
        </Link>

        <Link to="/signup">
          <button style={signupBtn}>Signup</button>
        </Link>
      </div>
    </nav>
  )
}

const linkStyle = {
  textDecoration: "none",
  color: "#444",
  transition: "0.3s"
}

const loginBtn = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "1px solid #db2777",
  background: "white",
  color: "#db2777",
  cursor: "pointer"
}

const signupBtn = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  background: "linear-gradient(135deg,#db2777,#7c3aed)",
  color: "white",
  cursor: "pointer"
}

export default Navbar