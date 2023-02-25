import React, { useMemo } from 'react'
import Context from './context'
import PropTypes from 'prop-types';

type Props = {
  children: React.ReactNode;
}

function Provaider({ children }: Props) {
  const [inputName, setInputName] = React.useState('')

  const data = useMemo(() => ({
    inputName,
    setInputName,
  }), [
    inputName, 
    setInputName
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