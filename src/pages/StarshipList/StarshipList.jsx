import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStartshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStartshipData()
  }, [])

  return (
    <>
      <div>
        <h1>Starship List</h1>
        <div>
          {starships.map(starship =>
            <Link
              to='/starship'
              key={starship.name}
              state={{ starship }} >
              <div>
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default StarshipList;