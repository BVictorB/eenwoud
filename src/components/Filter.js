import { useState, useEffect } from 'react'
import Netherlands from './Netherlands'

const Filter = ({ treeData, setFilteredTreeData }) => {
    // const test = treeData.filter(item => Object.values(item).includes(treeType))
    // const removeFromFiltered = filteredTreeData.filter(item => item.tree !== treeType)

  const 
    [filterOptions, setFilterOptions] = useState({
      treeType: null,
      emotion: null,
      province: null
    }),
    treeTypes = [...new Set(treeData.map(item => item.tree))],
    emotions = [...new Set(treeData.map(item => item.emotion))]

  useEffect(() => {
    const filteredTrees = treeData.filter(item => {
      let filterType = filterOptions.treeType ? item.tree === filterOptions.treeType : item.tree
      let filterEmotion = filterOptions.emotion ? item.emotion === filterOptions.emotion : item.emotion
      let filterProvince = filterOptions.province ? item.province === filterOptions.province : item.province
      return filterType && filterEmotion && filterProvince
    })
    setFilteredTreeData(filteredTrees)
  }, [filterOptions, treeData, setFilteredTreeData])

  return (
    <div className="m-filter">
      <h1>Filter</h1>
      <p>Selecteer filters om te filteren tussen bomen...</p>
      <h2>Soort boom</h2>
      <label>
        <input type='radio' name='type' defaultChecked onChange={() => setFilterOptions((prevState) => ( { ...prevState, treeType: null }))} />
        All
      </label>
      {treeTypes.map((treeType, index) => (
        <label key={index}>
          <input type='radio' name='type' onChange={() => setFilterOptions((prevState) => ( { ...prevState, treeType: treeType }))} />
          {treeType}
        </label>
      ))}
      <h2>Emotie verhaal</h2>
      <label>
        <input type='radio' name='emotion' defaultChecked onChange={() => setFilterOptions((prevState) => ( { ...prevState, emotion: null }))} />
        All
      </label>
      {emotions.map((emotion, index) => (
        <label key={index}>
          <input type='radio' name='emotion' onChange={() => setFilterOptions((prevState) => ( { ...prevState, emotion: emotion }))} />
          {emotion}
        </label>
      ))}
      <h2>Afkomst boom</h2>
      <Netherlands filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
    </div>
  )
}

export default Filter