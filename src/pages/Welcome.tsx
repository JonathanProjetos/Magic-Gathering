import React from 'react'
import Input from '../Components/Input'
import ButtonRedirect from '../Components/ButtonRedirect'

function Welcome() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      Bem vindo ao catálogo de cards de Magic Gathering V1!
      <Input/>
      <ButtonRedirect/>
    </section>
  )
}

export default Welcome