import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook/">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
