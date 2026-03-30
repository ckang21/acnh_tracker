import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/villagers">Villagers</Link>
        <Link to="/critters">Critters</Link>
    </nav>
  )
}

export default NavBar
