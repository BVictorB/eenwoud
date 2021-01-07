import { useState } from 'react'
import Map from './components/Map'
import Lightbox from './components/Lightbox'
import Intro from './components/Intro'

const App = () => {
  const 
    [geoCountryData, setGeoCountryData] = useState(null),
    [lightboxContent, setLightboxContent] = useState(null)

  return (
    <>
      {/* {lightboxContent ? <Lightbox lightboxContent={lightboxContent} setLightboxContent={setLightboxContent}/> : null} */}
      {/* <Map setLightboxContent={setLightboxContent}/> */}
      <Intro />
    </>
  )
}

export default App