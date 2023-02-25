import React, { useContext } from 'react'
import Context from '../context/context'
import { useNavigate } from 'react-router-dom'

function button() {
  const { inputName } = useContext(Context)
  const navigate = useNavigate();

  return (
    <div>
      <button
        className='px-6 py-2 text-white bg-red-300 rounded focus:outline-none" disabled'
        type="button"
        data-testid="button"
        disabled={inputName.length < 2 }
        onClick={() => navigate('/cards')}
      >
          ENTRAR
      </button>
    </div>
  )
}

export default button