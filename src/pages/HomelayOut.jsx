import { Outlet } from "react-router-dom";

const Homelayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      </div>
  )
}

export default Homelayout;
