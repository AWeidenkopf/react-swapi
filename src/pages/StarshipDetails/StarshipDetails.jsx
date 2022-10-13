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
    <div>
      {starshipDetails.name ?
        <>
          <div className="name">
            <p><span>Name:</span>{starshipDetails.name}</p>
          </div>
          <div className="model">
            <p><span>Model:</span>{starshipDetails.model}</p>

            <div>
              <PilotList starship={starshipDetails}/>
            </div>
          </div>
          <Link to='/'>
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