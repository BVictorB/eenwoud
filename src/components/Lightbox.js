import TreeMap from './TreeMap'

const Lightbox = ({ lightboxContent, setLightboxContent, geoDataNetherlands }) => {
  return (
    <div className='m-lightbox'>
      <div className='m-lightbox__column'>
        {lightboxContent.pictures.map((picture, index) => (
          <>
            <img className='m-lightbox__picture' src={picture} alt=""/>
            <p>{lightboxContent.pictureText[index]}</p>
          </>
        ))}
        <div className='m-lightbox__map'>
          {geoDataNetherlands && lightboxContent.coordsNL && lightboxContent.image ? <TreeMap geoDataNetherlands={geoDataNetherlands} coordsNL={lightboxContent.coordsNL} treeImage={lightboxContent.image}/> : null}
        </div>
      </div>
      <div className='m-lightbox__column'>
        <button onClick={() => setLightboxContent(null)}>Close</button>
        <h1>{`${lightboxContent.tree} van ${lightboxContent.name}`}</h1>
        <p>{lightboxContent.text}</p>
        <p>{lightboxContent.text}</p>
        <p>De levensverwachting van een {lightboxContent.tree} ligt tussen de 500 en 600 jaar.</p>
        <p>Zo ziet de verwachte ontwikkeling eruit van de {lightboxContent.tree} in het Eenwoud:</p>
        <img className='m-lightbox__tree' src={lightboxContent.image} alt=""/>
      </div>
    </div>
  )
}

export default Lightbox