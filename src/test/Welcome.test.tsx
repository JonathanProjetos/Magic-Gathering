import {screen} from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import { describe, it  } from 'vitest'
import App from '../App'

describe('Page Welcome', ()=> {
  it('Page Welcome', () => {
    renderWithRouter(<App />, ['/'])
  
    const title = screen.getByText(/Bem vindo ao catálogo de cards de Magic Gathering V1!/i)
    expect(title).toBeInTheDocument()
  })
})