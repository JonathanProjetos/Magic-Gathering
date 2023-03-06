import React from 'react'
import Header from './Header'
import SkipButton from './SkipButton'

function DetailCard() {
  const getCardByLocalStorage = JSON.parse(
    localStorage.getItem('card') || '{}'
  )

  return (
    <section className='w-screen flex flex-col justify-center items-center'>
      <nav className='w-screen'>
        <Header />
        <h1 className='text-4xl text-center font-bold'>
          {getCardByLocalStorage.name}
        </h1>
      </nav>
      {Object.keys(getCardByLocalStorage).length === 0 ? (
        <h1>Carregando...</h1>
      ) : (
        <div className='flex flex-row-reverse justify-center items-center my-10 w-full h-2xx'>
          <div className='w-full mx-52 text-left'>
            <h1 className='my-5 border-b-2 border-black'>{`SetName : ${getCardByLocalStorage.setName}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Type: ${getCardByLocalStorage.type}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Rarity: ${getCardByLocalStorage.rarity}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`ManaCost: ${getCardByLocalStorage.manaCost}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Power : ${getCardByLocalStorage.power}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Color: ${getCardByLocalStorage.colors}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Types: ${getCardByLocalStorage.types}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Text  : ${getCardByLocalStorage.text}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Flavor : ${getCardByLocalStorage.flavor}`}</h1>
            <h1 className='my-5 border-b-2 border-black'>{`Artist : ${getCardByLocalStorage.artist}`}</h1>
          </div>
          <div className='w-96 h-96 mx-52 flex flex-row justify-center items-center'>
            <img
              className='w-2xx h-2xx max-w-none max-h-none'
              src={getCardByLocalStorage.imageUrl}
              alt='card'
            />
          </div>
        </div>
      )}
      <SkipButton path='/cards' />
    </section>
  )
}

export default DetailCard
