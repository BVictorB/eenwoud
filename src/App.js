import { useState, useEffect } from 'react'
import { json } from 'd3'
import Map from './components/Map'

const App = () => {
  const [geoDataNetherlands, setGeoDataNetherlands] = useState(null)
  const [geoDataTrees, setGeoDataTrees] = useState(null)

  const geoData = 'https://gist.githubusercontent.com/BVictorB/ada1109582e22f353dec4084ce78cdbf/raw/65c235e14a8256470cec6b8bcb918523e524193d/geojson-netherlands.json'
  const treeData = 'https://gist.githubusercontent.com/BVictorB/7dd5bbe2103d818efee528b8121250f5/raw/bd2a58d4d717f4b93170ff684e3478397415e9c4/trees.json'

  useEffect(() => {
    json(geoData).then(data => {
      setGeoDataNetherlands(data)
    })

    json(treeData).then(data => {
      setGeoDataTrees(data)
    })
  }, [])

  return (
    <>
      {geoDataNetherlands && geoDataTrees ? <Map geoDataNetherlands={geoDataNetherlands} geoDataTrees={geoDataTrees}/> : null}
    </>
  )
}

export default App