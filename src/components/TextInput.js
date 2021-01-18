const TextInput = ({ text, onTextChange }) => {
  return (
    <label>
      {text}
      <input type='text' name='type' onChange={(e) => onTextChange(e.target.value)} />
    </label>
  )
}

export default TextInput