import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="">
      <div className="">Temilade</div>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="About" className="navlink">About</NavLink>
      <NavLink to="Service" className="navlink">Service</NavLink>
      <NavLink to="Resume" className="navlink">Resume</NavLink>
      <NavLink to="Contact" className="navlink">Contact</NavLink>
    </div>
  )

}

export default Navbar