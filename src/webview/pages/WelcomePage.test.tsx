import App from '../App';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';

describe('Welcome Page', () => {
  let button: HTMLButtonElement;
  beforeEach(async () => {
    await renderWithProviders(<App />);
    button = screen.getByRole('button');
  });
  
  test('renders start button on welcome page', () => {
    expect (button).toHaveTextContent(/start dodging/i);
  }) 
  test('after clicking on button, interactive page with world map exists', () => {
    fireEvent.click(button);
    expect(screen.getByTestId('interactivePage')).toBeDefined();
    expect(screen.getByTestId('worldMap')).toBeDefined();
  })
})

