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
          className='text-center my-5 border-b-2 border-black outline-none'
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