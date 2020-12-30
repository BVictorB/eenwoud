import { useState, useEffect } from 'react'
import { json } from 'd3'
import Map from './components/Map'
import * as topojson from 'topojson-client'

const App = () => {
  const [geoCountryData, setGeoCountryData] = useState(null)

  const countryData = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

  useEffect(() => {
    if (localStorage.getItem('countryData')) {
      setGeoCountryData(JSON.parse(localStorage.getItem('countryData')))
    } else {
      json(countryData).then(data => {
        const countryFeatures = topojson.feature(data, data.objects.countries)
        setGeoCountryData(countryFeatures)
        localStorage.setItem('countryData', JSON.stringify(countryFeatures))
      })
    }
  }, [])

  return (
    <>
      {geoCountryData ? <Map geoCountryData={geoCountryData} size={600} /> : null}
    </>
  )
}

export default App