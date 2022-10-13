import './StarshipDetails.css'
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/sw-api"
import { Link } from "react-router-dom"
import PilotList from "../../components/Pilots/PilotsList"


const StarshipDetails = () => {
  const [starshipDetails, setStartshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStartshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <div className='card'>
      {starshipDetails.name ?
        <>
          <div className="name">
          <h3>Name:</h3>
            <p>{starshipDetails.name}</p>
          </div>
          <div className="model">
            <h3>Model:</h3>
            <p>{starshipDetails.model}</p>
          </div>
            <div>
              <PilotList starship={starshipDetails}/>
            </div>
          <Link to='/' className='return'>
            Return
          </Link>
        </>
        :
        <p>Loading page ... </p>
      }

    </div>
  )
}

export default StarshipDetails;