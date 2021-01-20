import { useState } from 'react'
import {ReactComponent as EenwoudLogo} from '../assets/images/eenwoud-logo.svg'
import {ReactComponent as Planet} from '../assets/images/planet.svg'
import IntroAnimation from '../components/IntroAnimation'
import IntroGraph from '../components/IntroGraph'
import IntroGraph2 from '../components/IntroGraph2'

const Intro = ({ setNavigation }) => {
  const 
    [planetActive, setPlanetActive] = useState(false),
    [hidePlanet, setHidePlanet] = useState(false),
    [bottomPlanet, setBottomPlanet] = useState(false),
    [zoom, setZoom] = useState(false)

  document.addEventListener('scroll', () => {
    window.innerHeight*3.5 > window.scrollY && window.scrollY > window.innerHeight/3 ? setPlanetActive(true) : setPlanetActive(false)
    window.scrollY > window.innerHeight/3 ? setHidePlanet(true) : setHidePlanet(false)
    window.scrollY > window.innerHeight*3.5 ? setBottomPlanet(true) : setBottomPlanet(false)
  })
  return (
    <div className='m-intro'>
      <div className={planetActive ? 'm-intro__sideplanet m-intro__sideplanet--active' : 'm-intro__sideplanet'}>
        <Planet />
      </div>
      <div className={hidePlanet ? 'm-intro__planet hide' : 'm-intro__planet'}>
        <EenwoudLogo className='logo' />
        <Planet className='planet' />
      </div>
      <IntroAnimation />
      <IntroGraph />
      <IntroGraph2 />
      <div className={`m-intro__planet ${bottomPlanet ? '' : 'hide'} ${zoom ? 'zoom' : ''} m-intro__planet--clickable`}>
        <Planet className='planet' onClick={() => {
          setZoom(true)
          setTimeout(() => {
            setNavigation('map')
          }, 500)
        }} />
      </div>
    </div>
    // <IntroAnimation />
  )
}

export default Intro