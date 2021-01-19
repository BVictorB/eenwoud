import { geoMercator, geoPath } from 'd3'

export const 
  projection = geoMercator().scale(5300).center([8.5, 52]),
  pathGenerator = geoPath().projection(projection) 