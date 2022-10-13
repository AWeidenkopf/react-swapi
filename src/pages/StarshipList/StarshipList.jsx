import './StarshipList.css'
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
      <div className='title'>
        <h1>STARSHIP LIST</h1>
          </div>
        <div className='list'>
          {starships.length ?
          <>
          {starships.map(starship =>
            <Link
              to='/starship'
              key={starship.name}
              state={{ starship }} >
              <div className='starship-card'>
                {starship.name}
              </div>
            </Link>
          )}
          </>
          :
          <>
          <p>Loading content ...</p>
          </>
}
      </div>
    </>
  )
}

export default StarshipList;