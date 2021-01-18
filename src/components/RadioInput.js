const RadioInput = ({ text, options, name }) => {
  return (
    <>
      <p>{text}</p>
      {options.map((option, index) => (
        <label key={index}>
          <input type='radio' name={name} onChange={() => null} />
          {option}
        </label>
      ))}
    </>
  )
}

export default RadioInput