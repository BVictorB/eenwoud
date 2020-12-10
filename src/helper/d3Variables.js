import { geoMercator, geoPath } from 'd3'

export const 
  projection = geoMercator().scale(8000).center([5.22, 52.55]),
  pathGenerator = geoPath().projection(projection)