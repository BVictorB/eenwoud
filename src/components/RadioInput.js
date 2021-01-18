const RadioInput = ({ text, options, name, onRadioChange }) => {
  return (
    <>
      <p>{text}</p>
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