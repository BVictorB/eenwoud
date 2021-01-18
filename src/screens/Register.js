import { useState } from 'react'
import FileInput from '../components/FileInput'
import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'
import RadioInput from '../components/RadioInput'

const Register = () => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: null,
    age: null,
    type: null,
    treeAge: null,
    treeLocation: null,
    treeDescription: null,
    treeReason: null,
    emotion: null
  })

  const nextPage = () => {
    setStep(prevState => prevState + 1)
  }

  const prevPage = () => {
    setStep(prevState => prevState - 1)
  }

  const finishForm = () => {
    console.log(formData)
  }

  return (
    <div className='m-register'>
    <div className='m-register__container'>
      <h1>De nazaten van jouw boom in Eenwoud? Meld je boom nu aan!</h1>
      {step === 0 ? <Register1 setFormData={setFormData} /> : null}
      {step === 1 ? <Register2 setFormData={setFormData} /> : null}
      {step === 2 ? <Register3 setFormData={setFormData} /> : null}
      {step === 3 ? <Register4 setFormData={setFormData} /> : null}
      {step !== 0 ? <button onClick={() => prevPage()}>prev</button> : null}
      {step !== 3 ? <button onClick={() => nextPage()}>next</button> : null}
      {step === 3 ? <button onClick={() => finishForm()}>finish</button> : null}
    </div>
  </div>
  )
}

const Register1 = ({ setFormData }) => {
  const updateFormData = (field, info) => {
    setFormData((prevState) => ( { ...prevState, [field]: info }))
  }

  return (
    <div className='m-register__container--flex'>
      <div className='m-register__column'>
        <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
      </div>
      <div className='m-register__column'>
        <h2>Jouw gegevens</h2>
        <TextInput text={'Wat is jouw naam?'} onTextChange={(text) => updateFormData('name', text)} />
        <TextInput text={'Hoe oud ben je?'} onTextChange={(text) => updateFormData('age', text)} />
        <FileInput text={'Upload een foto van de boom die je wilt voordragen'} />
        <FileInput text={'Upload een foto van een detail van de boom'} />
        <FileInput text={'Upload een foto van jou met de boom'} />
      </div>
    </div> 
  )
}

const Register2 = ({ setFormData }) => {
  const updateFormData = (field, info) => {
    setFormData((prevState) => ( { ...prevState, [field]: info }))
  }

  return (
    <div className='m-register__container--flex'>
      <div className='m-register__column'>
        <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
      </div>
      <div className="m-register__column">
        <h2>De boom</h2>
        <RadioInput 
          text={'Wat voor soort boom draag je voor?'}
          options={['Eik', 'Beuk', 'Wilg', 'Appelboom', 'Olijfboom', 'Overige', 'Weet ik niet']}
          name={'treeType'}
          onRadioChange={(option) => updateFormData('type', option)}
        />
        <TextInput text={'Hoe oud denk je dat de boom ongeveer is?'} onTextChange={(text) => updateFormData('treeAge', text)} />
        <TextInput text={'Wat is de locatie van de boom?'} onTextChange={(text) => updateFormData('treeLocation', text)} />
      </div>
    </div> 
  )
}

const Register3 = ({ setFormData }) => {
  const updateFormData = (field, info) => {
    setFormData((prevState) => ( { ...prevState, [field]: info }))
  }

  return (
    <div className='m-register__container--flex'>
      <div className='m-register__column'>
        <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
      </div>
      <div className="m-register__column">
        <h2>Reden van voordragen</h2>
        <TextareaInput text={'Wat betekent deze boom voor jou?'} onTextChange={(text) => updateFormData('treeDescription', text)} />
        <TextareaInput text={'Waarom draag je deze boom voor?'} onTextChange={(text) => updateFormData('treeReason', text)} />
      </div>
    </div> 
  )
}

const Register4 = ({ setFormData }) => {
  const updateFormData = (field, info) => {
    setFormData((prevState) => ( { ...prevState, [field]: info }))
  }

  return (
    <div className='m-register__container--flex'>
      <div className='m-register__column'>
        <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
      </div>
      <div className="m-register__column">
        <RadioInput 
          text={'Welke emotie hoort bij je verhaal?'}
          options={['Liefde', 'Geluk']}
          name={'emotion'}
          onRadioChange={(option) => updateFormData('emotion', option)}
        />
      </div>
    </div> 
  )
}

export default Register