import { useState, useEffect } from 'react'
import { json } from 'd3'
import * as topojson from 'topojson-client'
import Sphere from './components/Sphere'
import Map from './components/Map'
import Lightbox from './components/Lightbox'

const App = () => {
  const 
    [geoCountryData, setGeoCountryData] = useState(null),
    [lightboxContent, setLightboxContent] = useState(null),
    countryData = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

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
      {/* {lightboxContent ? <Lightbox lightboxContent={lightboxContent} setLightboxContent={setLightboxContent}/> : null} */}
      {geoCountryData ? <Sphere geoCountryData={geoCountryData} size={600} /> : null}
      {/* <Map setLightboxContent={setLightboxContent}/> */}
    </>
  )
}

export default App