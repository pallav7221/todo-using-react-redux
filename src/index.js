import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import { store } from './Redux/Store';
import { Provider } from 'react-redux/es/exports';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  
  </BrowserRouter>
);

