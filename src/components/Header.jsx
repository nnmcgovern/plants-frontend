import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/plants">All Plants</NavLink>
        <NavLink to="/new-plant">Add New Plant</NavLink>
      </header>
    </div>
  )
}