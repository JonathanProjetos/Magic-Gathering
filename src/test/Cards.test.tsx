import { screen, waitFor, act } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import { cardsMock } from './mocks/Cards'
import { describe, it, vi } from 'vitest'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
import Cards  from '../pages/Cards'
import api from '../Api/request'

const apiMock = new MockAdapter(api);

describe('Page Cards' ,()=> {
  
  it('testando a presença do text inicial da page', async () => {

    renderWithRouter(<Cards />, ['/cards'])
    const TITLE = screen.getByRole('heading', { level: 1, name: /Catálogo de/i })
    expect(TITLE).toBeInTheDocument()     

  })

  it('testando a presença do input de pesquisa', async () => {
    renderWithRouter(<Cards />, ['/cards'])

    const INPUT = screen.getByRole('textbox')
    expect(INPUT).toBeInTheDocument()     
  })

  it('testando se o nome da card está na tela', async () => {
    act(() => {
      apiMock.onGet('/cards')
        .reply(200, cardsMock)
    })

    renderWithRouter(<Cards />, ['/cards'])

    const CARDNAME = await screen.findByText(/Ancestor's Chosen/i)
    expect(CARDNAME).toBeInTheDocument()     
  })

})