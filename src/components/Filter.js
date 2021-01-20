import { useState, useEffect } from 'react'
import Netherlands from './SelectProvince'
import Slider from './Slider'
import closeIcon from '../assets/images/close.png'

const Filter = ({ treeData, setFilteredTreeData }) => {
  const 
    [filterOptions, setFilterOptions] = useState({
      treeType: null,
      emotion: null,
      province: null,
      treeAge: null,
      personAge: null,
      expectedAge: null
    }),
    treeTypes = [...new Set(treeData.map(item => item.tree))],
    emotions = [...new Set(treeData.map(item => item.emotion))],
    [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    const filteredTrees = treeData.filter(item => {
      let filterType = filterOptions.treeType ? item.tree === filterOptions.treeType : item.tree
      let filterEmotion = filterOptions.emotion ? item.emotion === filterOptions.emotion : item.emotion
      let filterProvince = filterOptions.province ? item.province === filterOptions.province : item.province
      let filterTreeAge = filterOptions.treeAge ? item.treeAge > filterOptions.treeAge : item.treeAge
      let filterPersonAge = filterOptions.personAge ? item.personAge > filterOptions.personAge : item.personAge
      let filterExpectedAge = filterOptions.expectedAge ? item.expectedAge > filterOptions.expectedAge : item.expectedAge
      return filterType && filterEmotion && filterProvince && filterTreeAge && filterPersonAge && filterExpectedAge
    })
    setFilteredTreeData(filteredTrees)
  }, [filterOptions, treeData, setFilteredTreeData])

  return (
    <>
      <div className='m-filter__button' onClick={() => setShowFilter(true)}>
        <p>Filter</p>
      </div>
      <div className={showFilter ? 'm-filter m-filter--active' : 'm-filter'}>
        <img 
          className='m-filter__close-button' 
          onClick={() => setShowFilter(false)} 
          src={closeIcon} 
          alt=''
        />
        <h1>Filter</h1>
        <p>Selecteer filters om te filteren tussen bomen...</p>
        <h2>Soort boom</h2>
        <label>
          <input 
            type='radio' 
            name='type' 
            defaultChecked 
            onChange={() => setFilterOptions((prevState) => ( { ...prevState, treeType: null }))} 
          />
          All
        </label>
        {treeTypes.map((treeType, index) => (
          <label key={index}>
            <input 
              type='radio' 
              name='type' 
              onChange={() => setFilterOptions((prevState) => ( { ...prevState, treeType: treeType }))} 
            />
            {treeType}
          </label>
        ))}
        <h2>Thema</h2>
        <label>
          <input 
            type='radio' 
            name='emotion' 
            defaultChecked 
            onChange={() => setFilterOptions((prevState) => ( { ...prevState, emotion: null }))} 
          />
          All
        </label>
        {emotions.map((emotion, index) => (
          <label key={index}>
            <input 
              type='radio' 
              name='emotion' 
              onChange={() => setFilterOptions((prevState) => ( { ...prevState, emotion: emotion }))} 
            />
            {emotion}
          </label>
        ))}
        <h2>Afkomst boom</h2>
        <Netherlands filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
        <Slider 
          sliderName='Leeftijd persoon' 
          sliderFunction={(e) => setFilterOptions((prevState) => ( { ...prevState, personAge: e.target.value }))} 
          sliderValue={filterOptions.personAge === null ? 'alle leeftijden' : `vanaf ${filterOptions.personAge} jaar`} 
          limit='100'
        />
        <Slider 
          sliderName='Leeftijd boom' 
          sliderFunction={(e) => setFilterOptions((prevState) => ( { ...prevState, treeAge: e.target.value }))} 
          sliderValue={filterOptions.treeAge === null ? 'alle leeftijden' : `vanaf ${filterOptions.treeAge} jaar`} 
          limit='1000'
        />
        <Slider 
          sliderName='Levensverwachting boom' 
          sliderFunction={(e) => setFilterOptions((prevState) => ( { ...prevState, expectedAge: e.target.value }))} 
          sliderValue={filterOptions.expectedAge === null ? 'alle levensverwachtingen' : `vanaf ${filterOptions.expectedAge} jaar`} 
          limit='1000'
        />
      </div>
    </>
  )
}

export default Filter