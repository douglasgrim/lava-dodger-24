import { ReactElement } from 'react';

import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';
import { ReadyProvider } from './contexts/ReadyContext';
import './app.css';

function App():ReactElement {
  return (
    <div className="app">
      <ReadyProvider>
        <Header activeTitle="Lava Dodger '24" />
        <WelcomePage />
      </ReadyProvider>
    </div>
  );
}

export default App;
