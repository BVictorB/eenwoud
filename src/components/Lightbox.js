import treeImage from '../assets/images/tree.png'

const Lightbox = ({ lightboxContent, setLightboxContent }) => {
  return (
    <div className='lightbox'>
      <h1>{`${lightboxContent.tree} van ${lightboxContent.name}`}</h1>
      <h2>{lightboxContent.tree}</h2>
      <h2>{lightboxContent.color}</h2>
      <img src={treeImage} alt=""/>
      <button onClick={() => setLightboxContent(null)}>Close</button>
    </div>
  )
}

export default Lightbox