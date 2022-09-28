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

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <div className="page">
               <Nav />
               <Routes>
                  <Route path="/" element={<Dialogs />} />
                  <Route path="/profile" element={<Main />} />
                  <Route path="/messages" element={<Dialogs />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
               </Routes>
            </div>
         </div>

      </BrowserRouter>
   );
}

export default App;
