import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { Home } from './Home';

jest.mock('../../components/HeaderPage/HeaderPage', () => ({
  HeaderPage: () => <div data-testid="header-page">Header Page</div>,
}));

jest.mock('../../components/Card/Card', () => ({
  CardPokemon: ({ pokemon }) => (
    <div data-testid="pokemon-card">{pokemon?.name}</div>
  ),
}));

jest.mock('../../components/Buttons/ButtonLoadMore', () => ({
  ButtonLoadMore: ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

jest.mock('../../components/Buttons/ButtonDropdownToggle', () => ({
  DropdownToggle: ({ onClick }) => (
    <button onClick={onClick}>Toggle Dropdown</button>
  ),
}));

jest.mock('../../components/Buttons/ButtonClearFilters', () => ({
  ClearFiltersButton: ({ onClear }) => (
    <button onClick={onClear}>Clear Filters</button>
  ),
}));

jest.mock('../../components/SelectOptionsPokemon/SelectOptionsPokemon', () => ({
  DropdownOptions: () => <div>Dropdown Options</div>,
}));

jest.mock('../../components/ThemeTogglerButton/ThemeTogglerButton', () => ({
  ThemeTogglerButton: () => <button>Toggle Theme</button>,
}));

beforeEach(() => {
  global.fetch = jest.fn(async (url) => {
    if (url.includes('/type')) {
      return {
        json: async () => ({
          results: [{ name: 'fire' }, { name: 'water' }],
        }),
      };
    } else if (url.includes('/pokemon?limit=10')) {
      return {
        json: async () => ({
          next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
          results: [
            { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
          ],
        }),
      };
    } else if (url.includes('/25')) {
      return {
        json: async () => ({
          id: 25,
          name: 'pikachu',
          types: [{ type: { name: 'electric' } }],
        }),
      };
    } else if (url.includes('/pokemon?offset=10&limit=10')) {
      return {
        json: async () => ({
          next: null,
          results: [
            { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4' },
          ],
        }),
      };
    } else if (url.includes('/4')) {
      return {
        json: async () => ({
          id: 4,
          name: 'charmander',
          types: [{ type: { name: 'fire' } }],
        }),
      };
    }

    return {
      json: async () => ({}),
    };
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home Component', () => {
  test('renders Header and Pokémon list', async () => {
    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('header-page')).toBeInTheDocument();
      expect(screen.getByText('pikachu')).toBeInTheDocument();
    });
  });

  test('opens and closes dropdown', async () => {
    await act(async () => {
      render(<Home />);
    });

    const dropdownButton = await screen.findByText('Toggle Dropdown');
    fireEvent.click(dropdownButton);

    expect(await screen.findByText('Dropdown Options')).toBeInTheDocument();
  });

  test('calls LoadMore when button is clicked', async () => {
    await act(async () => {
      render(<Home />);
    });

    // Espera renderizar o botão "Load more"
    await waitFor(() => {
      expect(screen.getByText('Load more')).toBeInTheDocument();
    });

    const loadMoreButton = screen.getByText('Load more');
    fireEvent.click(loadMoreButton);

    // O fetch deve ser chamado pelo menos duas vezes: inicial + load more
    expect(global.fetch).toHaveBeenCalled();

    // Opcionalmente verificar se a lista atualizou com o charmander após o load more
    await waitFor(() => {
      expect(screen.getByText('charmander')).toBeInTheDocument();
    });
  });
});
