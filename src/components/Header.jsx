import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header>
        <NavLink className="header-link" to="/" >Home</NavLink>
        <NavLink className="header-link" to="/plants">All Plants</NavLink>
        <NavLink className="header-link" to="/new-plant">Add New Plant</NavLink>
      </header>
    </div>
  )
}