import { Link } from "react-router-dom"

function Home() {

  const featuredVendors = [
  {
    name: "Dream Photography",
    category: "Wedding Photography",
    rating: "⭐ 4.9",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
  },
  {
    name: "Royal Wedding Decor",
    category: "Stage & Floral Decoration",
    rating: "⭐ 4.7",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"
  },
  {
    name: "Bridal Beauty Studio",
    category: "Bridal Makeup Artist",
    rating: "⭐ 4.8",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800"
  },
  {
    name: "Golden Feast Catering",
    category: "Wedding Catering",
    rating: "⭐ 4.6",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800"
  }
]

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO SECTION */}
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "white"
        }}
      >

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg,rgba(0,0,0,0.6),rgba(124,58,237,0.6))"
          }}
        />

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: "700px"
          }}
        >
          <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
            Find Perfect Wedding Vendors 💍
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            Photographers, decorators, makeup artists and more
            for your dream wedding.
          </p>

          {/* SEARCH BAR */}
          <div
            style={{
              display: "flex",
              background: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
          >
            <input
              type="text"
              placeholder="Search vendors..."
              style={{
                flex: 1,
                padding: "15px",
                border: "none",
                outline: "none"
              }}
            />

            <Link to="/vendors">
              <button
                style={{
                  padding: "15px 30px",
                  border: "none",
                  background: "linear-gradient(135deg,#ec4899,#7c3aed)",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <div style={{ padding: "70px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Popular Wedding Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "25px"
          }}
        >
          {["📸 Photography", "🎨 Decoration", "💄 Makeup", "🍽 Catering"].map(
            (item) => (
              <div
                key={item}
                style={{
                  padding: "30px",
                  borderRadius: "12px",
                  background: "#faf5ff",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  transition: "0.3s",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* FEATURED VENDORS */}
      <div style={{ padding: "70px", background: "#faf5ff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Featured Vendors
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px"
          }}
        >
          {featuredVendors.map((vendor, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{vendor.name}</h3>
                <p style={{ color: "#666" }}>{vendor.category}</p>
                <p style={{ color: "#ec4899", fontWeight: "bold" }}>
                  {vendor.rating}
                </p>
                <Link to="/vendors">
    <button
      style={{
        marginTop: "10px",
        padding: "10px 18px",
        border: "none",
        borderRadius: "8px",
        background: "linear-gradient(135deg,#ec4899,#7c3aed)",
        color: "white",
        cursor: "pointer"
      }}
    >
      View Vendors
    </button>
  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home