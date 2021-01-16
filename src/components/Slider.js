const Slider = ({ sliderName, sliderValue, sliderFunction, limit }) => {
  return (
    <>
      <h2>{sliderName}</h2>
      <label>
        <input type='range' min='0' max={limit} defaultValue='0' onChange={sliderFunction} />
        {sliderValue}
      </label>
    </>
  )
}

export default Slider