import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Vendors from "./pages/Vendors"
import VendorDetails from "./pages/VendorDetails"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendor/:id" element={<VendorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  )
}

export default App