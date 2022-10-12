import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"

const StarshipList = () => {
  const [startships, setStarships] = useState([])

  useEffect(() => {
    const fetchStartshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStartshipData()
  }, [])
  return (
    <div>
      <h1>Starship List</h1>
    {startships.map(starship => 
      <p>{starship.name}</p>
      )}
      </div>
  )
}

export default StarshipList;