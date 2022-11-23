import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/reduxStore';
import { HashRouter, } from "react-router-dom";
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // Hash for gh-pages
   <HashRouter >
      <Provider store={store}>
         <App />
      </Provider>
   </HashRouter>
);
