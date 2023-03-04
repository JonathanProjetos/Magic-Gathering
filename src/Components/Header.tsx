import React from 'react'
import SingOut from './SingOut'

function Header() {

  return (
    <div 
      className='w-screen h-auto flex flex-row justify-between py-5'
    >
      <h1 className='ml-10 text-2xl'>
        {
          `Seja bem vindo! ${localStorage.getItem('name') || ''}.`
        }
      </h1>
      <SingOut />
    </div>
  )
}

export default Header