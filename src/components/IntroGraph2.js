import { useState } from 'react'
import graph1 from '../assets/images/graph2/1.png'
import graph2 from '../assets/images/graph2/2.png'
import graph3 from '../assets/images/graph2/3.png'
import graph4 from '../assets/images/graph2/4.png'
import graph5 from '../assets/images/graph2/5.png'
import graph6 from '../assets/images/graph2/6.png'
import graph7 from '../assets/images/graph2/7.png'
import graph8 from '../assets/images/graph2/8.png'
import graph9 from '../assets/images/graph2/9.png'
import graph10 from '../assets/images/graph2/10.png'
import graph11 from '../assets/images/graph2/11.png'
import graph12 from '../assets/images/graph2/12.png'
import graph13 from '../assets/images/graph2/13.png'
import graph14 from '../assets/images/graph2/14.png'
import graph15 from '../assets/images/graph2/15.png'

const IntroGraph2 = () => {
  const graphImages = [graph1, graph2, graph3, graph4, graph5, graph6, graph7, graph8, graph9, graph10, graph11, graph12, graph13, graph14, graph15]
  
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
      <h2>Hoeveel kg koolstofdioxide stoot Nederland per jaar uit?</h2>
      <div className="m-intrograph__container">
        <div className="m-intrograph__column">
          {currentImage === graph1 ? <h2>156 miljard kg!</h2> : <h2>165 miljoen!</h2>}
          {currentImage === graph1 ? <p>Nederland heeft 17,3 miljoen inwoners en de gemiddelde Nederlander stoot 9000kg koolstofdioxide uit. Dat betekent dat wij met zijn allen per jaar gewoon 156 miljard kg aan koolstofdioxide uitstoten, daar zijn eigenlijk 7,8 miljard bomen voor nodig!</p> : <p>Nederland heeft zoals je ziet maar 165 miljoen bomen. Dat is niet genoeg om onze uitstoot van koolstofdioxide te compenseren. Wel kunnen we ons best doen om zo min mogelijk koolstofdioxide uit te stoten of door natuurlijk een boom te planten.</p>}
          {currentImage === graph1 ? <button onClick={imageFunction}>Hoeveel bomen?</button> : null}
        </div>
        <div className="m-intrograph__column">
          <img src={currentImage} alt='' />
        </div>
      </div>
    </div>
  )
}

export default IntroGraph2