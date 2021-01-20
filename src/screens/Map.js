import { useRef, useState } from 'react'
import { select, zoom, geoMercator } from 'd3'
import trees from '../assets/treeData'
import Filter from '../components/Filter'

const Map = ({ setLightboxContent, setNavigation, setShowLightbox }) => {
  const
    [filteredTreeData, setFilteredTreeData] = useState(trees),
    [showTooltip, setShowTooltip] = useState(true),
    projection = geoMercator().scale(7000).center([2.5, 2.5]),
    svgEl = useRef(null),
    svgGroup = useRef(null),
    svg = select(svgEl.current),
    group = select(svgGroup.current)

  svg.call(zoom().scaleExtent([1,5]).on('zoom', (e) => {
    group.attr('transform', e.transform)
  }))

  return (
    <>
      <div className='m-map__register-button' onClick={() => setNavigation('register')}>
        <p>Meld je eigen boom aan!</p>
      </div>
      <Filter 
        treeData={trees} 
        filteredTreeData={filteredTreeData} 
        setFilteredTreeData={setFilteredTreeData} 
      />
      <div className="m-map">
        <svg ref={svgEl} width="100%" height="100%">
          <g className="group" ref={svgGroup}>
            {filteredTreeData.map((tree, index) => (
              <image onClick={() => {
                setLightboxContent(tree)
                setShowLightbox(true)
              }} href={tree.image} key={index} className="tree" x={projection(tree.coords)[0]-20} y={projection(tree.coords)[1]-20} width="40" height="40" />
            ))}
          </g>
        </svg>
        <div className={showTooltip ? 'm-map__tooltip m-map__tooltip--active' : 'm-map__tooltip'}>
          <h2>Welkom in het Eenwoud!</h2>
          <p>Gebruik de filters aan de linkerkant van het scherm om te filteren tussen bomen in het Eenwoud.</p>
          <button onClick={() => setShowTooltip(false)}>Verberg</button>
        </div>
      </div>
    </>
  )
}

export default Map