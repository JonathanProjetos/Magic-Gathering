import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component:any , historyEntries = ['/']) => {
  const history = createMemoryHistory({ initialEntries: historyEntries });
  return {
    ...render(
      <MemoryRouter initialEntries={ historyEntries }>
        {component}
      </MemoryRouter>,
    ),
    history,
  };
};
export default renderWithRouter;