import React, { useMemo, useEffect, useState } from 'react'
import Context from './context'
import PropTypes from 'prop-types';
import { requestCards } from '../Api/request'
import { Cards } from '../Interface/Cards';
import { Card } from '../Interface/Card';

type Props = {
  children: React.ReactNode;
}

function Provaider({ children }: Props) {
  const [inputName, setInputName] = useState('')
  const [cards, setCards] = useState([])
  const [cardById, setCardById ] = useState<Record<string, Cards>>({})
  
  const getAllCards = async (): Promise<void> => {
    try {
      const data = await requestCards()
      const dataFilterCards = data && data.cards.filter((card: Cards) => card.imageUrl !== undefined)
      setCards(dataFilterCards)
    
    } catch (error) {
      console.log(error)
    }
  }

  const getCardByID = (): void => {
    const id = localStorage.getItem('idCard') || []
    const data = cards && cards.find((card: Card) => card.multiverseid === id )
    console.log("data", data);
    setCardById(data as any)
  }

  useEffect(()=> {
    getAllCards()
  }, [])
  
  const data = useMemo(() => ({
    inputName,
    setInputName,
    cards,
    cardById,
    getCardByID
  }), [
    inputName, 
    setInputName,
    cards,
    cardById,
    getCardByID
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