import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SkipButtonProps } from '../Interface/SkipButton'

function SkipButton({ path }: SkipButtonProps) {

  const navigate = useNavigate()

  return (
    <div> 
      <button
        type='button'
        className='text-white bg-black px-6 py-2 rounded'
        onClick={() => navigate(path)}
      >
        VOLTAR
      </button>
    </div>
  )
}

export default SkipButton