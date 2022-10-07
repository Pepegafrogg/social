import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import Music from "./components/music/Music";
import './styles/app.css'

function App(props) {
   return (
      <div className="App">
         <Header />
         <div className="page">
            <Nav state={props.appState.navFriends} />
            <Routes>
               <Route path="/" element={<Main dispatch={props.dispatch} profilePage={props.appState.profilePage} />} />
               <Route path="/profile" element={<Main dispatch={props.dispatch} profilePage={props.appState.profilePage} />} />
               <Route path="/messages/*" element={<Dialogs dispatch={props.dispatch} state={props.appState.dialogPage} />} />
               <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
