const Register4 = () => {
  return (
    <div className='m-register'>
      <div className='m-register__container'>
        <h1>De nazaten van jouw boom in Eenwoud? Meld je boom nu aan!</h1>
        <div className="m-register__container--flex">
          <div className="m-register__column">
            <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
          </div>
          <div className="m-register__column">
            <h2>Welke emotie hoort bij je verhaal?</h2>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Liefde
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Geluk
            </label>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Register4