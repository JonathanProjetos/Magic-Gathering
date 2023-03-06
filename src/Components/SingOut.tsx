import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../assets/icons/index'

function SingOut() {
  const navigate = useNavigate()

  const clearLocalStorage = () => {
    localStorage.setItem('name', '')
    localStorage.setItem('idCard', '')
    navigate('/', { replace: true })
  }

  return (
    <div className='mr-10'>
      <button type='button' onClick={() => clearLocalStorage()}>
        <img src={icon[0].logo} alt='sair' className='w-10 h-10' />
      </button>
    </div>
  )
}

export default SingOut
