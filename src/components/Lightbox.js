import TreeMap from './TreeMap'
import closeIcon from '../assets/images/close.png'
import AudioPlayer from '../components/AudioPlayer'

const Lightbox = ({ lightboxContent, geoDataNetherlands, setShowLightbox, showLightbox }) => {
  if (!lightboxContent) {
    return (
      <div className={showLightbox ? 'm-lightbox m-lightbox--active' : 'm-lightbox'}>
      </div>
    )
  }

  return (
    <div className={showLightbox ? 'm-lightbox m-lightbox--active' : 'm-lightbox'}>
      <div className="m-lightbox__container">
        <img className='m-lightbox__close-button' onClick={() => setShowLightbox(false)} src={closeIcon} alt=""/>
        <div className="m-lightbox__intro-container">
          <div className="m-lightbox__intro-container__column">
            <h1>De {lightboxContent.tree} {lightboxContent.audio ? <AudioPlayer url={lightboxContent.audio}/> : null}</h1>
            <h2>van {lightboxContent.name}</h2>
          </div>
          <div className="m-lightbox__intro-container__column">
            <img className="m-lightbox__intro-container__column__image" src={lightboxContent.image} alt=""/>
            <p>Een {lightboxContent.tree} kan 500 tot 600 jaar oud worden.</p>
          </div>
        </div>
        <p>{lightboxContent.text}</p>
        <p>{lightboxContent.text2}</p>
        <div className="m-lightbox__pictures">
          {lightboxContent.pictures.map((picture, index) => (
            <div className='m-lightbox__picture' key={index}>
              <img src={picture} alt=""/>
            </div>
          ))}
        </div>
        <h2 className='m-lightbox__map__title'>Oorspronkelijke locatie van de {lightboxContent.tree}</h2>
        <div className='m-lightbox__map'>
          {geoDataNetherlands && lightboxContent.coordsNL && lightboxContent.image ? <TreeMap geoDataNetherlands={geoDataNetherlands} coordsNL={lightboxContent.coordsNL} treeImage={lightboxContent.image}/> : null}
        </div>
        <p className='m-lightbox__map__text'>De {lightboxContent.tree} van {lightboxContent.name} staat in {lightboxContent.province}</p>
      </div>
    </div>
  )
}

export default Lightbox