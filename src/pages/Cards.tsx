import React, { useEffect, useState } from 'react'
import { requestCards } from '../Api/request'
import { Card } from '../Interface/Cards';


function Cards() {
  const [cards, setCards] = useState([])
  console.log('testando aqui', cards);
  
  const getCards = async () => {
  try {
   const data = await requestCards()
    setCards(data.cards)
  
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=> {
  try {
    getCards()
  } catch (error) {
    console.log(error) 
  }
}, [])

  return (
    <section>
      <div>
        {
          cards.length > 0 ? cards.map((card: Card, index) => {
            return (
              <div key={ index }>
                <h1 className='text-center bg-slate-500'>{card.name}</h1>
                <img src={card.imageUrl} alt = "cards"/>
              </div>
            )
          }) : <h1>Carregando...</h1>
        }
      </div>
    </section>
  )
}

export default Cards
