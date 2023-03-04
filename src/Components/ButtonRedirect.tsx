import React, { useContext } from 'react'
import Context from '../context/context'
import { useNavigate } from 'react-router-dom'

function button() {
  const { inputName } = useContext(Context)
  const navigate = useNavigate();

  const redirectButton = () => {
    if(inputName.length > 0){
      localStorage.setItem('name', inputName)
    }
    navigate('/cards', { replace: true })
  }

  return (
    <div>
      <button
        className='px-6 py-2 rounded focus:outline-none" disabled'
        style={{
          backgroundColor: inputName.length >= 5 ? 'black' : '#D9D9D9',
          color: inputName.length >= 5 ? 'white' : 'black',
        }}
        type="button"
        data-testid="button"
        disabled={inputName.length < 5 }
        onClick={() => redirectButton()}
      >
          ENTRAR
      </button>
    </div>
  )
}

export default button