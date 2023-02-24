import React from 'react'
import Context from './context'
import PropTypes from 'prop-types';

type Props = {
  children: React.ReactNode;
}

function Provaider({ children }: Props) {

  return (
    <Context.Provider value={{}}>
      { children } 
    </Context.Provider>
  )
}

Provaider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provaider