import React, { useContext } from 'react'
import Context from '../context/context'

function InputSeachCard() {
  const { setInputSearch, inputSearch } = useContext(Context)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
  }

  return (
    <div className='flex flex-row justify-center items-center text-center'>
      <label >
        Gostaria de pesquisar uma Card? 
        <input
          className='text-center'
          type="text"
          value={ inputSearch }
          onChange={ handleChange }
          placeholder="Digite o nome da card"
          data-testid="input"
        />
      </label>
    </div>
  )
}

export default InputSeachCard