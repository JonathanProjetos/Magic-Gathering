import React, { useContext } from 'react'
import Context from '../context/context'

function input() {
  const { inputName, setInputName } = useContext(Context)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value)
  }

  return (
    <div className='m-5'>
      <input
        className='text-center'
        style={{
          width: '15vw',
          height: '4vh',
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: '1px solid black',
        }}
        type="text"
        value={inputName}
        onChange={handleChange}
        placeholder="Digite seu nome"
        data-testid="input"
      />
    </div>
  )
}

export default input