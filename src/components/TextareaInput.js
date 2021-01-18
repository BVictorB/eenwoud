const TextareaInput = ({ text, onTextChange }) => {
  return (
    <label>
      {text}
      <textarea name="" id="" cols="30" rows="10" onChange={(e) => onTextChange(e.target.value)}></textarea>
    </label>
  )
}

export default TextareaInput