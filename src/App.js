import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import Music from "./components/music/Music";
import './styles/app.css'
import DialogsContainer from "./components/dialogs/DialogsContainer";

function App(props) {
   return (
      <div className="App">
         <Header />
         <div className="page">
            <Nav state={props.store.navFriends} />
            <Routes>
               <Route path="/" element={<Main store={props.store} dispatch={props.dispatch} />} />
               <Route path="/profile" element={<Main store={props.store} dispatch={props.dispatch} />} />
               <Route path="/messages/*" element={<DialogsContainer dispatch={props.dispatch} store={props.store} />} />
               <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
