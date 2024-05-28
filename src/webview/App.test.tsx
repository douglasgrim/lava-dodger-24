import App from './App';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/test-utils';
import welcomeImage from '../assets/images/welcomeImage-med.jpg';

describe('App', () => {
  beforeEach(async () => {
    await renderWithProviders(<App />);
  });
  
  test('renders App', () => {
    const appDiv = document.querySelector('.app') as HTMLDivElement;
    expect(appDiv.tabIndex).toEqual(0);
  });
  
  test('renders Welcome Page by default', () => {
    const welcomePageStyle = window.getComputedStyle(screen.getByTestId('welcomePage'));
    expect (welcomePageStyle.backgroundSize).toBe('contain');
    expect (welcomePageStyle.background).toContain(welcomeImage);
    expect (screen.getByRole('button')).toHaveTextContent(/start dodging/i);
  })  
})

