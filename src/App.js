import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";
import Music from "./components/music/Music";
import './styles/app.css'
import Login from "./components/login/Login";
import { Navigate } from 'react-router-dom';
import { initializeApp, initializedSucces } from "./redux/appReducer";
import PreLoader from "./components/common/preLoader/preLoader";
import { Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Users from "./components/users/Users";
import Header from "./components/header/Header";

const Dialogs = React.lazy(() => import("./components/dialogs/Dialogs"));
const Main = React.lazy(() => import("./components/main/Main"));

const App = (props) => {
   const { initialized } = useSelector(state => state.app)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(initializeApp())
   }, [initialized])

   if (!initialized) {
      return <PreLoader />
   }

   return (
      <div className="App">
         <Header />
         <div className="page">
            <Nav />
            <Suspense fallback={'Loading...'}>
               <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Navigate to="/profile" />} />
                  <Route path="/profile/:userId" element={<Main />} />
                  <Route path="/profile/*" element={<Main />} />
                  <Route path="/messages/*" element={<Dialogs />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
               </Routes>
            </Suspense>
         </div>
      </div>
   )
}
export default App

