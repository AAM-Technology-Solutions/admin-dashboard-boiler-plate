import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/global.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GloablThemeProvider } from './libs/core/theme/GloabalThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/app-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <GloablThemeProvider>
                <App />
        </GloablThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
