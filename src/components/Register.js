const Register = () => {
  return (
    <div className='m-register'>
      <div className='m-register__container'>
        <h1>De nazaten van jouw boom in Eenwoud? Meld je boom nu aan!</h1>
        <div className='m-register__container--flex'>
          <div className='m-register__column'>
            <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
          </div>
          <div className='m-register__column'>
            <h2>Jouw gegevens</h2>
            <label>
              Wat is jouw naam?
              <input type='text' name='type' onChange={() => null} />
            </label>
            <label>
              Hoe oud ben je?
              <input type='text' name='type' onChange={() => null} />
            </label>
            <label>
              Upload een foto van de boom die je wilt voordragen
              <input type='file' name='file' />
            </label>
            <label>
              Upload een foto van jou met de boom
              <input type='file' name='file' />
            </label>
            <label>
              Upload een foto van een detail van de boom
              <input type='file' name='file' />
            </label>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Register