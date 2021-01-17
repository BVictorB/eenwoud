const Register2 = () => {
  return (
    <div className='m-register'>
      <div className='m-register__container'>
        <h1>De nazaten van jouw boom in Eenwoud? Meld je boom nu aan!</h1>
        <div className="m-register__container--flex">
          <div className="m-register__column">
            <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
          </div>
          <div className="m-register__column">
            <h2>De boom</h2>
            <p>Wat voor soort boom draag je voor?</p>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Eik
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Beuk
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Wilg
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Appelboom
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Olijfboom
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Overige
            </label>
            <label>
              <input type='radio' name='type' onChange={() => null} />
              Weet ik niet
            </label>
            <label>
              Hoe oud denk je dat de boom ongeveer is?
              <input type='text' name='type' onChange={() => null} />
            </label>
            <label>
              Wat is de locatie van de boom?
              <input type='text' name='type' onChange={() => null} />
            </label>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Register2