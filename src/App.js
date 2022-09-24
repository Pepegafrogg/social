import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import './styles/app.css'

function App() {
   return (
      <div className="App">
         <Header />
         <div className="page">
            <Nav />
            <Main />
         </div>

      </div>
   );
}

export default App;
