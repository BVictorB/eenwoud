const TextInput = ({ text }) => {
  return (
    <label>
      {text}
      <input type='text' name='type' onChange={() => null} />
    </label>
  )
}

export default TextInput