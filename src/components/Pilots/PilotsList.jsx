import { useState, useEffect } from "react"
import { getPilots } from "../../services/sw-api"

const PilotList = (props) => {
const [pilots, setPilots] = useState([])
const pilotsUrls = props.starship.pilots

useEffect(() => {
  const fetchPilots = async () => {
    const pilotsData = await getPilots(pilotsUrls)
    setPilots(pilotsData)
  }
  fetchPilots()
}, [pilotsUrls])

  return ( 
    <div>
      {pilots.length?
      <>
      <h3>Pilots:</h3>
    {pilots.map(pilot => 
      <p>{pilot.name}</p>
    )}
    </>
    :
    <>
    <p>No pilots</p>
    </>}
    </div>
  )
}

export default PilotList;