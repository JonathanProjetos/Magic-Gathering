import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SkipButtonProps } from '../Interface/SkipButton'

function SkipButton({ path }: SkipButtonProps) {

  const navigate = useNavigate()

  return (
    <div> 
      <button
        type='button'
        onClick={() => navigate(path)}
      >
        VOLTAR
      </button>
    </div>
  )
}

export default SkipButton