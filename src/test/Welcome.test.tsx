import {screen} from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import { describe, it  } from 'vitest'
import App from '../App'

describe('Page Welcome', ()=> {
  it('Page Welcome', () => {
    renderWithRouter(<App />, ['/'])
  
    const title = screen.getByRole('heading', { name: /Hello/i })
    expect(title).toBeInTheDocument()
  })
})