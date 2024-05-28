import { ReactElement, KeyboardEvent } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { RootState, AppDispatch } from '../app/state/store';
import { userKeyAction } from '../app/actions/userKeyAction';


import WelcomePage from './pages/WelcomePage';
import InteractivePage from './pages/InteractivePage';
import LastPage from './pages/LastPage';
import Header from './components/Header';

import './app.css';


/**
 * 
 * @returns React component representing the root view
 */
function App():ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const { heroPosition, isAlive, isHome } = useSelector((state: RootState) => state.gameComponents);

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    dispatch(userKeyAction(key, heroPosition));
  }

  let title = 'Lava Dodger \'24';

  if (!isAlive) {
    title = 'Uh Oh You Died';
  }

  if (isHome) {
    title = 'Congrats on Surviving!';
  }

  // routes are not set until hero death or return home
  // so that reloading the route will redirect to the
  // default / route
  return (
    <BrowserRouter>
    <div className="app"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Header activeTitle={title} />

          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/interactive" element={<InteractivePage />} />
            { isHome && <Route path="/game-over-good" element={<LastPage happyEnding={true} />} /> }
            { !isAlive && <Route path="/game-over-bad" element={<LastPage happyEnding={false} />} /> }
            <Route path="*" element={<WelcomePage />} />

          </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
