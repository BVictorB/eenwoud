import { useState } from 'react'
import {ReactComponent as EenwoudLogo} from '../assets/images/eenwoud-logo.svg'
import {ReactComponent as Planet} from '../assets/images/planet.svg'

const Intro = ({ setNavigation }) => {
  const 
    [planetActive, setPlanetActive] = useState(false),
    [hidePlanet, setHidePlanet] = useState(false),
    [bottomPlanet, setBottomPlanet] = useState(false),
    [zoom, setZoom] = useState(false)

  document.addEventListener('scroll', () => {
    window.innerHeight*2.5 > window.scrollY && window.scrollY > window.innerHeight/2 ? setPlanetActive(true) : setPlanetActive(false)
    window.scrollY > window.innerHeight/2 ? setHidePlanet(true) : setHidePlanet(false)
    window.scrollY > window.innerHeight*2.5 ? setBottomPlanet(true) : setBottomPlanet(false)
  })
  return (
    <div className='m-intro'>
      <div className={planetActive ? 'm-intro__sideplanet active' : 'm-intro__sideplanet'}>
        <Planet />
      </div>
      <div className={hidePlanet ? 'm-intro__planet hide' : 'm-intro__planet'}>
        <EenwoudLogo className='logo' />
        <Planet className='planet' />
      </div>
      <div className='m-intro__info'>
        <h2>Bomen zijn belangrijk voor de aarde</h2>
        <p>Zuurstof wordt gevormd door middel van de fotosynthese bij planten en algen. Van alle planten vangt de boom verreweg het meeste CO2 op. Met meer bomen komt er dus minder CO2 in de lucht. Dat helpt tegen klimaatverandering. Hoeveel CO2 een boom precies opslaat, is lastig te zeggen. Dat verschilt per soort en hangt af van de leeftijd van de boom. Een snelgroeiende boom slaat veel op, maar wordt misschien niet zo oud. Een langzaam groeiende boom die heel oud wordt, houdt de CO2 langer vast. Gemiddeld kan je voor een volwassen boom uitgaan van zo’n 22 kg CO2 per boom, per jaar.</p>
      </div>
      <div className='m-intro__info'>
        <h2>Bomen zijn belangrijk voor ons</h2>
        <p>Zoals net verteld is wordt zuurstof gevormd doordat planten waarvan vooral bomen CO2 omzetten in zuurstof. Zuurstof hebben wij weer nodig om van te leven. Niet iedereen weet dat bomen eigenlijk zo belangrijk voor ons zijn. Het is goed om daar bewust van te zijn. Naast dat bomen zuurstof produceren voor ons, kunnen bomen ook een persoonlijke betekenis hebben voor mensen. Er zijn genoeg mensen die bijvoorbeeld een bepaalde herinnering hebben bij een specifieke boom.</p>
      </div>
      <div className={`m-intro__planet ${bottomPlanet ? '' : 'hide'} ${zoom ? 'zoom' : ''}`}>
        <Planet className='planet' onClick={() => {
          setZoom(true)
          setTimeout(() => {
            setNavigation('map')
          }, 500)
        }} />
      </div>
    </div>
  )
}

export default Intro