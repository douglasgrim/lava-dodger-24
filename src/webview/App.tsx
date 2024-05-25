import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import InteractivePage from './pages/InteractivePage';
import Header from './components/Header';
// import { ReadyProvider } from '../app/_contexts/ReadyContext';
import './app.css';

/**
 * 
 * @returns React component representing the root view
 */
function App():ReactElement {
  return (
    <div className="app">
      <Header activeTitle="Lava Dodger" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/interactive" element={<InteractivePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
