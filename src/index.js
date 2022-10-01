import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './redux/state';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addPost } from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App appState={state} addPost={addPost} />
   </BrowserRouter>
);
