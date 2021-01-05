import { geoOrthographic, geoPath } from 'd3'
import { useState } from 'react'

const Sphere = ({ geoCountryData, size }) => {
  const 
    [scale, setScale] = useState(300),
    [rotation, setRotation] = useState([0,0]),
    projection = geoOrthographic()
      .fitSize([size, size], geoCountryData)
      .scale(scale)
      .rotate(rotation),
    pathGenerator = geoPath().projection(projection),
    countryPaths = pathGenerator(geoCountryData)

  return (
    <div className='container'>
      <svg className='sphere' width={size} height={size}>
          <path className='countries' d={countryPaths} />
      </svg>
        {/* <button onClick={() => {
        setScale(600)
        setRotation([600, 0])
      }}>Animate</button> */}
    </div>
  )
}

export default Sphere