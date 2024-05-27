import App from './App';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';

describe('App', () => {
  beforeEach(async () => {
    await renderWithProviders(<App />);
  });
  
  test('renders App', () => {
    const appDiv = document.querySelector('.app') as HTMLDivElement;
    expect(appDiv.tabIndex).toEqual(0);
  });
  
  test('renders Welcome Page by default', () => {
    const welcomePageDiv = document.querySelector('.welcome-page') as HTMLDivElement;
    const welcomePageStyle = window.getComputedStyle(screen.getByTestId('welcomePage'));
    expect (welcomePageStyle.backgroundSize).toBe('contain');
    expect (screen.getByRole('button')).toHaveTextContent(/start dodging/i);
  })  
})

