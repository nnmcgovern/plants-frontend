import { Link } from "react-router-dom"

export default function Plant({ plant }) {
  return (
    <div>
      <Link to={`/plants/${plant["_id"]}`}>
        <h1>{plant["common_name"]}</h1>
      </Link>
    </div>
  )
}
