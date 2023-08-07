import { Link } from "react-router-dom"
import placeholderImg from "../img/placeholder-no-image.png"

export default function Plant({ plant }) {
  return (
    <div>
      <Link className="plants-link" to={`/plants/${plant["_id"]}`}>
        {plant.default_image ?
          <img src={plant.default_image.original_url} height="200px" alt={plant.common_name} /> :
          <img src={placeholderImg} height="200px" alt="placeholder: no image available" />}
        <p className="plants-name">{plant["common_name"]}</p>
      </Link>
    </div>
  )
}
