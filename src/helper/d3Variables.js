import { geoMercator, geoPath } from 'd3'

export const 
  projection = geoMercator().scale(4000).center([10.2, 51.3]),
  pathGenerator = geoPath().projection(projection) 