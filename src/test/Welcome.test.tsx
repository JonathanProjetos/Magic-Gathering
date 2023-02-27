import { screen, waitFor,waitForElementToBeRemoved } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import userEvent from '@testing-library/user-event'
import { describe, it } from 'vitest'
import App from '../App'

describe('Page Welcome', ()=> {

  it('presença da messagem inicial', () => {
    renderWithRouter(<App />, ['/'])
    
    const TITLE = screen.getByText(/Bem vindo ao catálogo de cards de Magic Gathering V1!/i)
    expect(TITLE).toBeInTheDocument()
  })
  
  it('É possivel digitar input name?', async () => {
    renderWithRouter(<App />, ['/'])
    
    const INPUT = screen.getByRole('textbox')
    expect(INPUT).toBeInTheDocument()

    await userEvent.type(INPUT, 'testando')
    expect(INPUT).toHaveValue('testando')
  })
  
  it('Disabled quando input name tem a quantidade de caracters menor 5', () => {
    renderWithRouter(<App />, ['/'])

    const button = screen.getByRole('button', { name: /Entrar/i })
    expect(button).toBeDisabled()
  })

  it('Botão de redirecionamento para a página de cards', async () => {
   renderWithRouter(<App />, ['/'])
    
    const INPUT = screen.getByRole('textbox')
    await userEvent.type(INPUT, 'teste')
    
    const button = screen.getByRole('button', { name: /Entrar/i })
    userEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
    
  })


})