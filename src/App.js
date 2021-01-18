import { useState, useEffect } from 'react'
import { json } from 'd3'
import Map from './screens/Map'
import Lightbox from './components/Lightbox'
import Intro from './screens/Intro'
import Register from './screens/Register'

const App = () => {
  const 
    [lightboxContent, setLightboxContent] = useState(null),
    [navigation, setNavigation] = useState('register'),
    [geoDataNetherlands, setGeoDataNetherlands] = useState(null)

  const geoData = 'https://gist.githubusercontent.com/BVictorB/ada1109582e22f353dec4084ce78cdbf/raw/65c235e14a8256470cec6b8bcb918523e524193d/geojson-netherlands.json'

  useEffect(() => {
    json(geoData).then(data => {
      setGeoDataNetherlands(data)
    })
  }, [])

  return (
    <>
      {navigation === 'intro' ? <Intro setNavigation={setNavigation}/> : null}
      {navigation === 'map' ? <Map setLightboxContent={setLightboxContent} /> : null}
      {navigation === 'register' ? <Register /> : null}
      {lightboxContent ? <Lightbox lightboxContent={lightboxContent} setLightboxContent={setLightboxContent} geoDataNetherlands={geoDataNetherlands}/> : null}
    </>
  )
}

export default App