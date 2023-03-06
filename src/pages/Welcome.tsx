import React from 'react'
import Input from '../Components/Input'
import ButtonRedirect from '../Components/ButtonRedirect'
import images from '../assets'

function Welcome() {
  return (
    <section
      className='w-full h-screen flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${images[0].logo})`,
        backgroundPositionX: 'center',
        backgroundPositionY: '10vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className='w-2vw h-4vh flex flex-col justify-center items-center'
        style={{
          textAlign: 'center',
          padding: '10px',
        }}
      >
        Magic Gathering V1!
        <Input />
        <ButtonRedirect />
      </div>
    </section>
  )
}

export default Welcome
