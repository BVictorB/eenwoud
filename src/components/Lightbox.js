import TreeMap from './TreeMap'

const Lightbox = ({ lightboxContent, setLightboxContent, geoDataNetherlands }) => {
  return (
    <div className='m-lightbox'>
      <div className='m-lightbox__column'>
        <div className='m-lightbox__map'>
          {geoDataNetherlands && lightboxContent.coords && lightboxContent.image ? <TreeMap geoDataNetherlands={geoDataNetherlands} coords={lightboxContent.coords} treeImage={lightboxContent.image}/> : null}
        </div>
      </div>
      <div className='m-lightbox__column'>
        <button onClick={() => setLightboxContent(null)}>Close</button>
        <h1>{`${lightboxContent.tree} van ${lightboxContent.name}`}</h1>
        <p>{lightboxContent.text}</p>
        <img src={lightboxContent.image} alt=""/>
      </div>
    </div>
  )
}

export default Lightbox