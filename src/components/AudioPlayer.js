import React, { useState, useEffect } from 'react'
import audioMute from '../assets/images/audio-mute.png'
import audioPlay from '../assets/images/audio-play.png'

const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      playing ? audio.play() : audio.pause()
    },
    [playing, audio]
  )

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}

const AudioPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return (
    <img className='m-lightbox__audio' onClick={toggle} src={playing ? audioMute : audioPlay} alt=''/>
  )
}

export default AudioPlayer