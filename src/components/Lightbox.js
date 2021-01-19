import TreeMap from './TreeMap'
import closeIcon from '../assets/images/close.png'

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
        <div className='m-lightbox__column--lg'>
          <img className='m-lightbox__close-button' onClick={() => setShowLightbox(false)} src={closeIcon} alt=""/>
          <h1>De {lightboxContent.tree} van {lightboxContent.name}</h1>
          <p>{lightboxContent.text}</p>
          <p>{lightboxContent.text}</p> 
          <div className="m-lightbox__pictures">
            {lightboxContent.pictures.map((picture, index) => (
              <div className='m-lightbox__picture' key={index}>
                <img src={picture} alt=""/>
                <p>{lightboxContent.pictureText[index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='m-lightbox__column--sm'>
          <img className='m-lightbox__tree' src={lightboxContent.image} alt=""/>
          <p>De levensverwachting van een {lightboxContent.tree} ligt tussen de 500 en 600 jaar.</p>
          <div className='m-lightbox__map'>
            {geoDataNetherlands && lightboxContent.coordsNL && lightboxContent.image ? <TreeMap geoDataNetherlands={geoDataNetherlands} coordsNL={lightboxContent.coordsNL} treeImage={lightboxContent.image}/> : null}
          </div>
          <p className='m-lightbox__map__text'>De {lightboxContent.tree} van {lightboxContent.name} staat in ....</p>
        </div>
        
      </div>
    </div>
  )
}

export default Lightbox