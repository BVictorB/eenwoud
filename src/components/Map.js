import { useRef, useState } from 'react'
import { select, zoom, geoMercator } from 'd3'
import trees from '../assets/treeData'
import Filter from './Filter'

const Map = ({ setLightboxContent }) => {
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
      <Filter treeData={trees} filteredTreeData={filteredTreeData} setFilteredTreeData={setFilteredTreeData} />
      <div className="m-map">
        <svg ref={svgEl} width="100%" height="100%">
          <g className="group" ref={svgGroup}>
            {filteredTreeData.map((tree, index) => (
              <image onClick={() => setLightboxContent(tree)} href={tree.image} key={index} className="tree" x={projection(tree.coords)[0]-20} y={projection(tree.coords)[1]-20} width="40" height="40" />
            ))}
          </g>
        </svg>
        <div className={showTooltip ? 'm-map__tooltip m-map__tooltip--active' : 'm-map__tooltip'}>
          <h2>Zoom, pan, click etc etc</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cumque non ipsam consectetur, blanditiis dolores dolore exercitationem quidem soluta ipsum.</p>
          <button onClick={() => setShowTooltip(false)}>Hide</button>
        </div>
      </div>
    </>
  )
}

export default Map