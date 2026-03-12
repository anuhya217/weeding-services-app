import { Link } from "react-router-dom"

const vendors = [
  {
    id: 1,
    name: "Dream Photography",
    category: "Wedding Photography",
    price: "₹50,000",
    rating: "⭐ 4.9",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    id: 2,
    name: "Royal Wedding Decor",
    category: "Decoration",
    price: "₹40,000",
    rating: "⭐ 4.7",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
  },
  {
    id: 3,
    name: "Bridal Beauty Studio",
    category: "Makeup Artist",
    price: "₹25,000",
    rating: "⭐ 4.8",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  }
]

function Vendors() {

  return (

    <div style={{
      padding:"40px",
      background:"#fdf2f8",
      minHeight:"100vh"
    }}>

      <h1 style={{
        marginBottom:"30px",
        color:"#7c3aed"
      }}>
        Wedding Vendors
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"25px"
      }}>

        {vendors.map(vendor => (

          <div
            key={vendor.id}
            style={{
              background:"white",
              borderRadius:"12px",
              overflow:"hidden",
              boxShadow:"0 10px 25px rgba(0,0,0,0.15)",
              transition:"0.3s"
            }}

            onMouseEnter={(e)=>
              e.currentTarget.style.transform="scale(1.05)"
            }

            onMouseLeave={(e)=>
              e.currentTarget.style.transform="scale(1)"
            }
          >

            <img
              src={vendor.image}
              alt={vendor.name}
              style={{
                width:"100%",
                height:"180px",
                objectFit:"cover"
              }}
            />

            <div style={{padding:"15px"}}>

              <h3>{vendor.name}</h3>

              <p>{vendor.category}</p>

              <p>{vendor.rating}</p>

              <p>📍 {vendor.location}</p>

              <p style={{color:"#ec4899",fontWeight:"bold"}}>
                {vendor.price}
              </p>

              <Link to={`/vendor/${vendor.id}`}>
                <button style={{
                  marginTop:"10px",
                  padding:"10px 15px",
                  border:"none",
                  borderRadius:"8px",
                  background:"linear-gradient(135deg,#ec4899,#7c3aed)",
                  color:"white",
                  cursor:"pointer"
                }}>
                  View Details
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Vendors