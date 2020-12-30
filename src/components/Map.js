import { geoOrthographic, geoPath } from 'd3'

const Map = ({ geoCountryData, size }) => {
  const 
    projection = geoOrthographic().fitSize([size, size], geoCountryData),
    geoGenerator = geoPath().projection(projection),
    countryPaths = geoGenerator(geoCountryData)

  return (
    <svg width={size} height={size} >
        <path className='countries' d={countryPaths} />
    </svg>
  )
}

export default Map