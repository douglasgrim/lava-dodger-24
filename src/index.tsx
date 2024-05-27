import React from 'react';
import { setupStore } from './app/state/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './webview/App';

/**
 * @returns - nothing. Top level of react tree with connected redux
 */
const index = (): void => {
  const store = setupStore();
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );  
}

index();
