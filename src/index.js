import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';
import { BrowserRouter, Route, Routes } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = () => {
   root.render(
      <BrowserRouter>
         <App appState={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
      </BrowserRouter>
   );
}

store.subscribe(reRender)

reRender()