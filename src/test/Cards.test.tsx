import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import { describe, it  } from 'vitest'
import Cards  from '../pages/Cards'

describe('Page Cards', ()=> {
  it('Testando a presença da carta renderizada', async () => {
    renderWithRouter(<Cards />, ['/cards'])
    
    await waitForElementToBeRemoved(() => screen.queryByText(/Carregando/i))
    
    const title = await screen.findAllByText(/Ancestor/i)
    expect(title[0]).toBeInTheDocument()
  })

})