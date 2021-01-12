import { geoMercator, geoPath } from 'd3'

export const 
  projection = geoMercator().scale(6000).center([7.9, 52]),
  pathGenerator = geoPath().projection(projection) 