import drops from '../assets/images/animation/drops.png'
import co2 from '../assets/images/animation/co2.png'
import magnifyingGlassCells from '../assets/images/animation/magnifying-glass-cells.png'
import magnifyingGlassLeaf from '../assets/images/animation/magnifying-glass-leaf.png'
import oxygen from '../assets/images/animation/oxygen.png'
import person from '../assets/images/animation/person.png'
import sun from '../assets/images/animation/sun.png'
import sunbeams from '../assets/images/animation/sunbeams.png'
import tree from '../assets/images/animation/tree.png'
import { useState } from 'react'

const IntroAnimation = () => {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep(prevState => prevState + 1)
  }

  const prevStep = () => {
    setStep(prevState => prevState - 1)
  }

  const animationSteps = [
    {
      title: 'Fotosynthese',
      text: 'Fotosynthese is het proces waarbij planten koolstofdioxide(denk aan uitlaatgassen) omzetten in zuurstof. Wij hebben zuurstof nodig om te kunnen leven, planten zijn dus onmisbaar voor ons. Van alle planten vangen bomen verreweg het meeste koolstofdioxide op en produceert dan ook de meeste zuurstof. Voor fotosynthese zijn 3 elementen nodig'
    },
    {
      title: 'Koolstofdioxide',
      text: 'Wanneer wij ademen komt koolstofdioxide vrij, maar koolstofdioxide komt ook vrij door bijvoorbeeld de uitstoot van auto’s en vliegtuigen.'
    },
    {
      title: 'Koolstofdioxide',
      text: 'Een plant ademt door kleine mondjes aan de onderkant van het blad. Dit noemen we de huidmonjes. Via de huidmondjes neemt de plant koolstofdioxide op.'
    },
    {
      title: 'Zonlicht',
      text: 'Een boom heeft ook zonlicht nodig voor fotosynthese. De bladeren vangen het zonlicht op.'
    },
    {
      title: 'Water',
      text: 'Als laatste heeft een boom water nodig. Een boom neemt via zijn wortels water op uit de grond. Via de wortels stroomt het water naar de bladeren.'
    },
    {
      title: 'Produceren van Zuurstof',
      text: 'Wanneer er dus koolstofioxide, zonlicht en water aanwezig is, kan er fotosynthese plaatsvinden. Bij dit proces wordt de koolstofdioxide dus omgezet in zuurstof. Elk moment van de dag zijn er wel bomen voor jou aan het werk om de koolstofdioxide die wij uitstoten, om te zetten naar zuurstof.'
    },
  ]

  return (
    <div className="m-introanimation">
      <div className="m-introanimation__text">
        <h2>{animationSteps[step].title}</h2>
        <p>{animationSteps[step].text}</p>
        {step !== 0 ? <button onClick={() => prevStep()}>Vorige</button> : null}
        {step !== 5 ? <button onClick={() => nextStep()}>Volgende</button> : null}
      </div>
      <div className="m-introanimation__visuals">
        <img src={oxygen} className={step === 5 ? 'm-introanimation__oxygen m-introanimation__oxygen--active' : 'm-introanimation__oxygen'} alt='' />
        <img src={tree} className='m-introanimation__tree' alt='' />
        <img src={co2} className={step === 1 ? 'm-introanimation__co2 m-introanimation__co2--active' : 'm-introanimation__co2'} alt='' />
        <img src={person} className={step === 1 ? 'm-introanimation__person m-introanimation__person--active' : 'm-introanimation__person'} alt='' />
        <img src={magnifyingGlassLeaf} className={step === 2 ? 'm-introanimation__magnify-leaf m-introanimation__magnify-leaf--active' : 'm-introanimation__magnify-leaf'} alt='' />
        <img src={sun} className={step === 3 ? 'm-introanimation__sun m-introanimation__sun--active' : 'm-introanimation__sun'} alt='' />
        <img src={sunbeams} className={step === 3 ? 'm-introanimation__sunbeams m-introanimation__sunbeams--active' : 'm-introanimation__sunbeams'} alt='' />
        <img src={drops} className={step === 4 ? 'm-introanimation__drops m-introanimation__drops--active' : 'm-introanimation__drops'} alt='' />
      </div>
    </div>
  )
}

export default IntroAnimation