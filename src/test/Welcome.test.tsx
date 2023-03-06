import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Page Welcome', () => {
  it('presença da messagem inicial', () => {
    renderWithRouter(<App />, ['/']);

    const TITLE = screen.getByText(/Magic Gathering V1!/i);
    expect(TITLE).toBeInTheDocument();
  });

  it('É possivel digitar input name?', async () => {
    renderWithRouter(<App />, ['/']);

    const INPUT = screen.getByRole('textbox');
    expect(INPUT).toBeInTheDocument();

    await userEvent.type(INPUT, 'testando');
    expect(INPUT).toHaveValue('testando');
  });

  it('Disabled quando input name tem a quantidade de caracters menor 5', () => {
    renderWithRouter(<App />, ['/']);

    const BUTTON = screen.getByRole('button', { name: /Entrar/i });
    expect(BUTTON).toBeDisabled();
  });

  it('Botão de redirecionamento para a página de cards', async () => {
    renderWithRouter(<App />, ['/']);

    const INPUT = screen.getByRole('textbox');
    await userEvent.type(INPUT, 'teste');

    const BUTTON = screen.getByRole('button', { name: /Entrar/i });
    userEvent.click(BUTTON);
    expect(BUTTON).toBeInTheDocument();
    expect(BUTTON).toBeEnabled();

    const TITLECARD = await screen.findByRole('heading', { level: 1, name: /Catálogo de/i });
    expect(TITLECARD).toBeInTheDocument();
  });
});
