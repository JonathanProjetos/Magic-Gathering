import React, { useMemo, useEffect, useState } from 'react'
import Context from './context'
import PropTypes from 'prop-types';
import { requestCardByID, requestCards } from '../Api/request'
import { Card } from '../Interface/Cards';

type Props = {
  children: React.ReactNode;
}

function Provaider({ children }: Props) {
  const [inputName, setInputName] = useState('')
  const [cards, setCards] = useState([])

  const getAllCards = async () => {
    try {
      const data = await requestCards()
      const dataFilterCards = data?.cards.filter((card: Card) => card.imageUrl !== undefined)
      setCards(dataFilterCards)
    
    } catch (error) {
      console.log(error)
    }
  }

  const getCardByID = async (id: string) => {
    try {
      const data = await requestCardByID(id)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getAllCards()
  }, [])
  
  const data = useMemo(() => ({
    inputName,
    setInputName,
    getCardByID,
    cards,
  }), [
    inputName, 
    setInputName,
    cards,
  ])

  return (
    <Context.Provider value={{ ...data }}>
      { children } 
    </Context.Provider>
  )
}

Provaider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provaider