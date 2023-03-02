import React, { useContext } from 'react'
import Context from '../context/context'

function InputSeachCard() {
  const { setInputSearch, inputSearch } = useContext(Context)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
  }

  return (
    <div className='flex flex-row justify-center items-center text-center'>
        <input
          className='text-center my-5'
          type="text"
          value={ inputSearch }
          onChange={ handleChange }
          placeholder="Digite o nome de uma card"
          data-testid="input"
        />
    </div>
  )
}

export default InputSeachCard