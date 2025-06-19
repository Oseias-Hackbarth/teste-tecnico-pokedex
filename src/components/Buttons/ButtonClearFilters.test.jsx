import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ClearFiltersButton } from './ButtonClearFilters';

describe('ClearFiltersButton', () => {
  test('renderiza o botão e chama onClear ao clicar', () => {
    const onClearMock = jest.fn();

    render(<ClearFiltersButton onClear={onClearMock} />);

    const button = screen.getByText('Clear Filters');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClearMock).toHaveBeenCalledTimes(1);
  });
});
