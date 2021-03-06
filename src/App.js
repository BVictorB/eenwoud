import { useState, useEffect } from 'react'
import { json } from 'd3'
import Map from './screens/Map'
import Lightbox from './components/Lightbox'
import Intro from './screens/Intro'
import Register from './screens/Register'

const App = () => {
  const 
    [lightboxContent, setLightboxContent] = useState(null),
    [showLightbox, setShowLightbox] = useState(false),
    [navigation, setNavigation] = useState('intro'),
    [geoDataNetherlands, setGeoDataNetherlands] = useState(null)

  const geoData = 'https://gist.githubusercontent.com/BVictorB/ada1109582e22f353dec4084ce78cdbf/raw/65c235e14a8256470cec6b8bcb918523e524193d/geojson-netherlands.json'

  useEffect(() => {
    json(geoData).then(data => {
      setGeoDataNetherlands(data)
    })
  }, [])

  return (
    <>
      {navigation === 'intro' ? <Intro setNavigation={setNavigation} /> : null}
      {navigation === 'map' ? <Map setLightboxContent={setLightboxContent} setNavigation={setNavigation} setShowLightbox={setShowLightbox} /> : null}
      {navigation === 'register' ? <Register setNavigation={setNavigation} /> : null}
      <Lightbox lightboxContent={lightboxContent} geoDataNetherlands={geoDataNetherlands} setShowLightbox={setShowLightbox} showLightbox={showLightbox} />
    </>
  )
}

export default App