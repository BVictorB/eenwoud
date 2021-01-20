import { useState } from 'react'
import graph1 from '../assets/images/graph/1.png'
import graph2 from '../assets/images/graph/2.png'
import graph3 from '../assets/images/graph/3.png'
import graph4 from '../assets/images/graph/4.png'
import graph5 from '../assets/images/graph/5.png'
import graph6 from '../assets/images/graph/6.png'
import graph7 from '../assets/images/graph/7.png'
import graph8 from '../assets/images/graph/8.png'
import graph9 from '../assets/images/graph/9.png'
import graph10 from '../assets/images/graph/10.png'
import graph11 from '../assets/images/graph/11.png'
import graph12 from '../assets/images/graph/12.png'
import graph13 from '../assets/images/graph/13.png'
import graph14 from '../assets/images/graph/14.png'
import graph15 from '../assets/images/graph/15.png'
import graph16 from '../assets/images/graph/16.png'
import graph17 from '../assets/images/graph/17.png'

const IntroGraph = () => {
  const graphImages = [graph1, graph2, graph3, graph4, graph5, graph6, graph7, graph8, graph9, graph10, graph11, graph12, graph13, graph14, graph15, graph16, graph17]
  
  const [currentImage, setCurrentImage] = useState(graph1)

  const imageFunction = () => {
    graphImages.forEach((graphImage, index) => {
      setTimeout(() => {
        setCurrentImage(graphImage)
      }, 100 * index)
    })
  }
  
  return (
    <div className="m-intrograph">
      <h2>Hoeveel kg koolstofdioxide ademt de gemiddelde mens uit?</h2>
      <div className="m-intrograph__container">
        <div className="m-intrograph__column">
          {currentImage === graph1 ? <h2>290kg per jaar</h2> : <h2>14,5 bomen!</h2>}
          {currentImage === graph1 ? <p>De gemiddelde mens stoot per jaar 290kg koolstofdioxide uit door alleen nog maar te ademen. Hoeveel bomen zouden er nodig zijn om deze koolstofdioxide op te nemen en weer om te zetten in zuurstof.</p> : <p>Dit is alleen nog maar om de uitstoot te compenseren van het ademen. Maar naast ademen stoot je ook koolstofdioxide uit wanneer je je huis verwarmd of wanneer je reist met bijvoorbeeld de auto of het vliegtuig. Zelfs bij het kopen van kleding stoot je indirect koolstofdioxide uit. Alles bij elkaar opgeteld stoot de gemiddelde mens 4400kg CO2 per jaar uit. De gemiddelde Nederlander stoot zelfs 9000kg CO2 uit per jaar. Daar zijn zelfs 450 bomen voor nodig!</p>}
          {currentImage === graph1 ? <button onClick={imageFunction}>Hoeveel bomen?</button> : null}
        </div>
        <div className="m-intrograph__column">
          <img src={currentImage} alt='' />
        </div>
      </div>
    </div>
  )
}

export default IntroGraph