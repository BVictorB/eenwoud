import { useState } from 'react'
import FileInput from '../components/FileInput'
import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'
import RadioInput from '../components/RadioInput'

const Register = () => {
  const [step, setStep] = useState(0)

  const nextPage = () => {
    setStep(prevState => prevState + 1)
  }

  const prevPage = () => {
    setStep(prevState => prevState - 1)
  }

  return (
    <>
      {step === 0 ? <Register1 /> : null}
      {step === 1 ? <Register2 /> : null}
      {step === 2 ? <Register3 /> : null}
      {step === 3 ? <Register4 /> : null}

      {step !== 0 ? <button onClick={() => prevPage()}>prev</button> : null}
      <button onClick={() => nextPage()}>next</button>
    </>
  )
}

const Register1 = () => {
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
            <TextInput text={'Wat is jouw naam?'} />
            <TextInput text={'Hoe oud ben je?'} />
            <FileInput text={'Upload een foto van de boom die je wilt voordragen'} />
            <FileInput text={'Upload een foto van een detail van de boom'} />
            <FileInput text={'Upload een foto van jou met de boom'} />
          </div>
        </div>  
      </div>
    </div>
  )
}

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
            <RadioInput 
              text={'Wat voor soort boom draag je voor?'}
              options={['Eik', 'Beuk', 'Wilg', 'Appelboom', 'Olijfboom', 'Overige', 'Weet ik niet']}
              name={'treeType'}
            />
            <TextInput text={'Hoe oud denk je dat de boom ongeveer is?'} />
            <TextInput text={'Wat is de locatie van de boom?'} />
          </div>
        </div>  
      </div>
    </div>
  )
}

const Register3 = () => {
  return (
    <div className='m-register'>
      <div className='m-register__container'>
        <h1>De nazaten van jouw boom in Eenwoud? Meld je boom nu aan!</h1>
        <div className="m-register__container--flex">
          <div className="m-register__column">
            <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
          </div>
          <div className="m-register__column">
            <h2>Reden van voordragen</h2>
            <TextareaInput text={'Wat betekent deze boom voor jou?'} />
            <TextareaInput text={'Waarom draag je deze boom voor?'} />
          </div>
        </div>  
      </div>
    </div>
  )
}

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
            <RadioInput 
              text={'Welke emotie hoort bij je verhaal?'}
              options={['Liefde', 'Geluk']}
              name={'emotion'}
            />
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Register