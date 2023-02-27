import React, { useContext } from 'react'
import Context from '../context/context'

function DetailCard() {
  const { cardById } = useContext(Context)

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      { 
        Object.keys(cardById).length === 0 ? <h1>Carregando...</h1> :
      <div className='flex flex-row-reverse justify-center items-center my-10 w-full h-2xx'>
        <div className='w-full mx-52 text-left'>
          <h1 className='my-5'>{ `Name: ${cardById.name}` }</h1>
          <h1 className='my-5'>{ `SetName : ${cardById.setName}` }</h1>
          <h1 className='my-5'>{ `Type: ${cardById.type}` }</h1>
          <h1 className='my-5'>{ `Rarity: ${cardById.rarity}` }</h1>
          <h1 className='my-5'>{ `ManaCost: ${cardById.manaCost}` }</h1>
          <h1 className='my-5'>{ `Power : ${cardById.power}` }</h1>
          <h1 className='my-5'>{ `Color: ${cardById.colors}` }</h1>
          <h1 className='my-5'>{ `Types: ${cardById.types}` }</h1>
          <h1 className='my-5'>{ `Text  : ${cardById.text}` }</h1>
          <h1 className='my-5'>{ `Flavor : ${cardById.flavor}` }</h1>
          <h1 className='my-5'>{ `Artist : ${cardById.artist}` }</h1>
        </div>
        <div className='w-96 h-96 mx-52 flex flex-row justify-center items-center'>
          <img
            className='w-2xx h-2xx max-w-none max-h-none' 
            src={ cardById.imageUrl } 
            alt="card"/>
        </div>
      </div>
      }
    </section>
  )
}

export default DetailCard