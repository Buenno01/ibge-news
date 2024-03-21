import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';
import SearchNewsProvider from './context/SearchNewsContext/SearchNewsProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchNewsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchNewsProvider>
  </React.StrictMode>,
);
