import React, { useContext } from 'react'
import Context from '../context/context'
import { Card } from '../Interface/Cards';


function Cards() {
  const { getCardByID, cards } = useContext(Context) 

  console.log('testando aqui', cards);

  return (
    <section>
      <div className='flex flex-wrap justify-center items-center w-400 h-400 bg-slate-300'>
        {
          cards.length > 0 ? cards.map((card: Card, index) => {
            return (
              <div className={`grid grid-cols-${index} m-4  bg-slate-300`} key={ index }
              >
                <h1 className='text-center'>{card.name}</h1>
                <img 
                  id={card.id}
                  className=' bg-slate-300 rounded-lg' 
                  onClick={({ target }) => getCardByID(target.id)}
                  src={card.imageUrl} 
                  alt = "cards"/>
              </div>
            )
          }) : <h1>Carregando...</h1>
        }
      </div>
    </section>
  )
}

export default Cards
