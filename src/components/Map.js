import { useRef } from 'react'
import { select, zoom } from 'd3'
import { projection, pathGenerator } from '../helper/d3Variables'
import treeImage from '../assets/images/tree.png'

const Map = ({ geoDataNetherlands, geoDataTrees }) => {
  const 
    svgEl = useRef(null),
    svgGroup = useRef(null),
    svg = select(svgEl.current),
    group = select(svgGroup.current)

  svg.call(zoom().on('zoom', (e) => {
    group.attr('transform', e.transform)
  }))

  return (
    <svg ref={svgEl} width="100%" height="100%">
      <g className="group" ref={svgGroup}>
        <g className="districts">
          {geoDataNetherlands.features.map((geoData, index) => (
            <path key={index} className="district" d={pathGenerator(geoData)} />
          ))}
        </g>
        <g className="trees">
            {geoDataTrees.features.map((geoData, index) => (
              <image href={treeImage} onClick={() => console.log(geoData.properties.name)} key={index} className="tree" x={projection(geoData.geometry.coordinates)[0]-20} y={projection(geoData.geometry.coordinates)[1]-20} width="40" height="40" />
            ))}
          </g>
      </g>
    </svg>
  )
}

export default Map