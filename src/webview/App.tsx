

import { ReactElement, KeyboardEvent } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { store } from '../app/state/store';


import { RootState, AppDispatch } from '../app/state/store';
import { userKeyAction } from '../app/actions/userKeyAction';


import WelcomePage from './pages/WelcomePage';
import InteractivePage from './pages/InteractivePage';
import Header from './components/Header';

import './app.css';


/**
 * 
 * @returns React component representing the root view
 */
function App():ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const { heroPosition } = useSelector((state: RootState) => state.gameComponents);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    dispatch(userKeyAction(key, heroPosition));
  }


  return (
      <div className="app"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
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
