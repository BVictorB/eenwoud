import { useState } from 'react'
import FileInput from '../components/FileInput'
import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'
import RadioInput from '../components/RadioInput'
import PickLocation from '../components/PickLocation'

import beuk from '../assets/images/trees/beuk.png'
import denneboom from '../assets/images/trees/denneboom.png'
import gatalpa from '../assets/images/trees/gatalpa.png'
import ginkobiloba from '../assets/images/trees/ginkobiloba.png'
import noorseesdoorn from '../assets/images/trees/noorseesdoorn.png'
import olijfboom from '../assets/images/trees/olijfboom.png'
import populier from '../assets/images/trees/populier.png'
import rodebeuk from '../assets/images/trees/rodebeuk.png'
import treurbeuk from '../assets/images/trees/treurbeuk.png'
import zomereik from '../assets/images/trees/zomereik.png'

const treeTypes = [
  {
    name: 'Beuk',
    image: beuk
  },
  {
    name: 'Denneboom',
    image: denneboom
  },
  {
    name: 'Gatalpa',
    image: gatalpa
  },
  {
    name: 'Ginko Biloba',
    image: ginkobiloba
  },
  {
    name: 'Noorse Esdoorn',
    image: noorseesdoorn
  },
  {
    name: 'Olijfboom',
    image: olijfboom
  },
  {
    name: 'Populier',
    image: populier
  },
  {
    name: 'Rode beuk',
    image: rodebeuk
  },
  {
    name: 'Treurbeuk',
    image: treurbeuk
  },
  {
    name: 'Zomereik',
    image: zomereik
  },
]

const Register = ({ setNavigation }) => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({})

  const nextPage = () => {
    setStep(prevState => prevState + 1)
  }

  const prevPage = () => {
    setStep(prevState => prevState - 1)
  }

  const finishForm = () => {
    setNavigation('map')
  }

  return (
    <div className='m-register'>
    <div className='m-register__container'>
      <h1>De nazaten van jouw boom in Eenwoud? Meld je boom nu aan!</h1>
      {step === 0 ? <Register1 setFormData={setFormData} /> : null}
      {step === 1 ? <Register2 setFormData={setFormData} /> : null}
      {step === 2 ? <Register3 setFormData={setFormData} /> : null}
      {step === 3 ? <Register4 setFormData={setFormData} /> : null}
      {step === 4 ? <Register5 setFormData={setFormData} setStep={setStep} /> : null}
      {step === 5 ? <Register6 setFormData={setFormData} formData={formData} /> : null}
      <div className="m-register__button-container">
        {step !== 0 ? <button onClick={() => prevPage()}>Vorige</button> : null}
        {step !== 5 ? <button onClick={() => nextPage()}>Volgende</button> : null}
        {step === 5 ? <button onClick={() => finishForm()}>Afronden</button> : null}
      </div>
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
        <TextInput text={'Wat is je email adres?'} onTextChange={(text) => updateFormData('email', text)} />
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
        <TextInput text={'Wat voor een soort boom draag je voor?'} onTextChange={(text) => updateFormData('treeType', text)} />
        <TextInput text={'Wat is de locatie van de boom? (vul hier de coördinaten in)'} onTextChange={(text) => updateFormData('treeAge', text)} />
        <TextInput text={'Hoe oud denk je dat de boom ongeveer is?'} onTextChange={(text) => updateFormData('treeLocation', text)} />
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
          text={'Welk thema hoort bij je verhaal?'}
          options={['Liefde', 'Geluk']}
          name={'emotion'}
          onRadioChange={(option) => updateFormData('emotion', option)}
        />
      </div>
    </div> 
  )
}

const Register5 = ({ setFormData, setStep }) => {
  const updateFormData = (field, info) => {
    setFormData((prevState) => ( { ...prevState, [field]: info }))
  }

  return (
    <div className='m-register__container--flex'>
      <div className='m-register__column'>
        <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
      </div>
      <div className='m-register__column'>
        <h2>Kies de boomavatar die jouw boom het beste representeert</h2>
        <div className='m-register__tree-container'>
          {treeTypes.map((treeType, index) => (
            <div className='m-register__tree-button' key={index} onClick={() => {
              updateFormData('treeImage', treeType.name)
              updateFormData('treePicture', treeType.image)
              setStep(prevState => prevState + 1)
            }} >
              <img src={treeType.image} alt=''></img>
            </div>
          ))}
        </div>
      </div>
    </div> 
  )
}

const Register6 = ({ setFormData, formData }) => {
  const updateFormData = (field, info) => {
    setFormData((prevState) => ( { ...prevState, [field]: info }))
  }

  return (
    <div className='m-register__container--flex'>
      <div className='m-register__column'>
        <p>Leuk dat jij je boom voor wilt dragen! Eenwoud wilt graag een bos vormen dat voor wel duizend jaar mag blijven bestaan. De nazaten van jouw boom kunnen hier onderdeel van uitmaken. Vul daarom hier de gegevens in van jouw boom om hem in het Eenwoud te plaatsen.</p>
      </div>
      <div className="m-register__column">
        <h2>Selecteer de locatie voor de boom</h2>
        <PickLocation setFormData={setFormData} formData={formData}/>
      </div>
    </div> 
  )
}

export default Register