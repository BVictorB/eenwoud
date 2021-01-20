const RadioInput = ({ text, options, name, onRadioChange }) => {
  return (
    <>
      <h2>{text}</h2>
      {options.map((option, index) => (
        <label key={index}>
          <input type='radio' name={name} onChange={() => onRadioChange(option)} />
          {option}
        </label>
      ))}
    </>
  )
}

export default RadioInput