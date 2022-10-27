import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import Music from "./components/music/Music";
import './styles/app.css'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";

function App(props) {
   return (
      <div className="App">
         <HeaderContainer />
         <div className="page">
            <Nav />
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/profile/:userId" element={<Main />} />
               <Route path="/profile/*" element={<Main />} />
               <Route path="/messages/*" element={<DialogsContainer />} />
               <Route path="/users" element={<UsersContainer />} />
               <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
