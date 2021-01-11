const Lightbox = ({ lightboxContent, setLightboxContent }) => {
  return (
    <div className='m-lightbox'>
      <div className='m-lightbox__column'>

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