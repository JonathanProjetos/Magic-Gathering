import React, { useMemo, useEffect, useState } from 'react'
import Context from './context'
import PropTypes from 'prop-types'
import { requestCards } from '../Api/request'
import { Cards } from '../Interface/Cards'
import { Card } from '../Interface/Card'

type Props = {
  children: React.ReactNode;
};

function Provaider({ children }: Props) {
  const [inputName, setInputName] = useState('')
  const [inputSearch, setInputSearch] = useState('')
  const [cards, setCards] = useState([])
  const [dataCards, setDataCards] = useState([])

  //Fetch de todas as cartas é filtro as cartas que não tem imagem
  const getAllCards = async (): Promise<void> => {
    try {
      const data = await requestCards()
      const dataFilterCards =
        data && data.filter((card: Cards) => card.imageUrl !== undefined)

      setCards(dataFilterCards)
    } catch (error) {
      console.log(error)
    }
  }

  //Pega o id da carta e filtra a carta pelo id
  const getCardByID = (): void => {
    const id = localStorage.getItem('idCard') || []
    const data = cards && cards.find((card: Card) => card.multiverseid === id)
    localStorage.setItem('card', JSON.stringify(data))
  }

  //Filtro de cards por nome
  const filteCardsBySearch = (): void => {
    const filterCards =
      cards &&
      cards.filter((card: Cards) =>
        card.name.toLowerCase().includes(inputSearch.toLowerCase())
      )

    setDataCards(filterCards)
  }

  useEffect(() => {
    getAllCards()
  }, [])

  useEffect(() => {
    filteCardsBySearch()
  }, [cards, inputSearch])

  const data = useMemo(
    () => ({
      inputName,
      setInputName,
      dataCards,
      setInputSearch,
      inputSearch,
      getCardByID,
    }),
    [
      inputName,
      setInputName,
      dataCards,
      setInputSearch,
      inputSearch,
      getCardByID,
    ]
  )

  return <Context.Provider value={{ ...data }}>{children}</Context.Provider>
}

Provaider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provaider
