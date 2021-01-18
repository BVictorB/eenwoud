const FileInput = ({ text }) => {
  return (
    <label>
      {text}
      <input type='file' name='file' />
    </label>
  )
}

export default FileInput