import { ReactElement } from 'react';

import WelcomePage from './pages/WelcomePage';
import InteractivePage from './pages/InteractivePage';
import Header from './components/Header';
import { ReadyProvider } from './contexts/ReadyContext';
import './app.css';

/**
 * 
 * @returns React component representing the root view
 */
function App():ReactElement {
  return (
    <div className="app">
      <ReadyProvider>
        <Header activeTitle="Lava Dodger '24" />
        <WelcomePage />
        <InteractivePage />
      </ReadyProvider>
    </div>
  );
}

export default App;
