import React, { useContext } from 'react'
import Context from '../context/context'
import { Card } from '../Interface/Card';
import { useNavigate } from 'react-router-dom';


function Cards() {
  const { cards, getCardByID } = useContext(Context) 
  const navigate = useNavigate()
  // console.log('testando aqui', cards);

  const redirectDatailCard = (id: string) => {
    if(id.length > 0){
      localStorage.setItem('idCard', id)
    }
    getCardByID()
    navigate(`/detail-card/${id}`)
  }

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
                  id={ card.multiverseid }
                  className=' bg-slate-300 rounded-lg' 
                  onClick={({ target }:any) => redirectDatailCard(target.id) }
                  src={ card.imageUrl } 
                  alt = "cards"/>
              </div>
            )
          }) : <h1>Carregando.....</h1>
        }
      </div>
    </section>
  )
}

export default Cards
