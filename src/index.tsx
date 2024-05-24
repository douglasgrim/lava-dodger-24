import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './webview/App';


/**
 * @returns - nothing. Kicks off React tree. Good place for adding
 * Redux, ApolloJS, etc.
 */
const index = (): void => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>

        <App />
    </React.StrictMode>
  );  
}

index();
