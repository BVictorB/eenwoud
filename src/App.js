import { useState } from 'react'
import Map from './components/Map'
import Lightbox from './components/Lightbox'
import Intro from './components/Intro'

const App = () => {
  const 
    [lightboxContent, setLightboxContent] = useState(null),
    [navigation, setNavigation] = useState('map')

  return (
    <>
      {lightboxContent ? <Lightbox lightboxContent={lightboxContent} setLightboxContent={setLightboxContent}/> : null}
      {navigation === 'intro' ? <Intro setNavigation={setNavigation}/> : null}
      {navigation === 'map' ? <Map setLightboxContent={setLightboxContent}/> : null}
    </>
  )
}

export default App