import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/reduxStore';
import { BrowserRouter, Route, Routes } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = () => {
   root.render(
      <BrowserRouter>
         <App store={store.getState()} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
   );
}

store.subscribe(reRender)

reRender()