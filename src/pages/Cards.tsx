import React, { useContext } from 'react'
import Context from '../context/context'
import { Card } from '../Interface/Card';
import { useNavigate } from 'react-router-dom';
import InputSearchCard from '../Components/InputSeachCard';
import Header from '../Components/Header';
import images from '../assets';
import usePagination from '../hooks/usePagination';


function Cards() {
  const { dataCards, getCardByID } = useContext(Context) 
  const { currentData, goToNextPage, goToPreviousPage, currentPage, goToPage, totalPages } = usePagination(dataCards, 14)
  const navigate = useNavigate()

  const pageNumber = (pageNumber:number) => {
    goToPage(pageNumber)
  }
  

  const redirectDatailCard = (id: string) => {
    if(id.length > 0){
      localStorage.setItem('idCard', id)
    }
    getCardByID()
    navigate(`/detail-card/${id}`, { replace: true })
  }

  return (
    <section 
      className='h-screen w-screen font-bol'>
      <nav className='w-screen'>
        <Header />
      </nav>
      <h1 
        className='text-center text-6xl font-semibold '>Catálogo de Cards</h1>
      <InputSearchCard />
      <div className='flex flex-wrap justify-center items-center'>
        {
          currentData && currentData.map((card: Card, index) => {
            return (
              <div 
                className={`grid grid-cols-${index} m-4 w-2pxw h-2pxh`} 
                key={ index }
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
          })
        }
      </div>
      <div className='w-screen flex flex-row justify-center items-center my-10 text-xl'>
        <button
          className='mr-2' 
          onClick={() => goToPreviousPage()} 
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button 
            key={page} 
            onClick={() => pageNumber(page)} 
            disabled={currentPage === page}
            className='mx-1'
          >
            {page}
          </button>
        ))}
        <button 
          onClick={() => goToNextPage()} 
          disabled={currentPage === totalPages}
          className='ml-2'
        >
          Próxima
        </button>
      </div>
    </section>
  )
}

export default Cards
