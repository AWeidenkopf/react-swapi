import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStartshipDetails] = useState({})
  const location = useLocation()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStartshipDetails()
    }
    fetchDetails()
  }, [location.state.starship.url])
  return ( 
    <div>
          <h2>detailllsss yayy</h2>
      </div>
  )
}

export default StarshipDetails;