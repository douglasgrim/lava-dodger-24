import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import InteractivePage from './pages/InteractivePage';
import Header from './components/Header';
import { ReadyProvider } from '../app/contexts/ReadyContext';
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/interactive" element={<InteractivePage />} />
          </Routes>
        </BrowserRouter>
      </ReadyProvider>
    </div>
  );
}

export default App;
