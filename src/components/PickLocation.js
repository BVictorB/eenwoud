import { useRef } from 'react'
import { select, zoom, geoMercator, pointer } from 'd3'
import trees from '../assets/treeData'

const PickLocation = ({ setFormData, formData }) => {
  const
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
      <div className="m-picklocation">
        <svg ref={svgEl} width="100%" height="100%" onClick={(e) => setFormData((prevState) => ( { ...prevState, coords: pointer(e) }))}>
          <g className="group" ref={svgGroup}>
            {trees.map((tree, index) => (
              <image href={tree.image} key={index} className="tree" x={projection(tree.coords)[0]-20} y={projection(tree.coords)[1]-20} width="40" height="40" />
            ))}
          </g>
        </svg>
        <img className='m-picklocation__tree' src={formData.treePicture} alt=''></img>
      </div>
    </>
  )
}

export default PickLocation