import { projection, pathGenerator } from '../helper/d3Variables'

const TreeMap = ({ geoDataNetherlands, coords, treeImage }) => {
  return (
    <svg width="100%" height="100%">
      <g className="group">
        <g className="districts">
          {geoDataNetherlands.features.map((geoData, index) => (
            <path key={index} className="district" d={pathGenerator(geoData)} />
          ))}
        </g>
        <g className="tree">
          <image href={treeImage} className="tree" x={projection(coords)[0]-50} y={projection(coords)[1]-100} width="100" height="100" />
        </g>
      </g>
    </svg>
  )
}

export default TreeMap