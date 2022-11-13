import React, { Component } from "react";
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
import LoginPage from "./components/login/Login";
import { getAuth, } from './redux/authReducer'
import { connect } from "react-redux";
import { compose } from "redux";
import { Navigate, useLocation, useNavigate, useParams, } from 'react-router-dom';
import { initializeApp, initializedSucces } from "./redux/appReducer";
import PreLoader from "./components/common/preLoader/preLoader";

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

class App extends Component {
   componentDidMount() {
      console.log('1', this.props.initialized)
      this.props.initializeApp()
   }

   render() {

      console.log('2', this.props.initialized)
      if (!this.props.initialized) {
         return <PreLoader />
      }
      return (
         <div className="App">
            <HeaderContainer />
            <div className="page">
               <Nav />
               <Routes>
                  <Route path="/login" element={<LoginPage />} />
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
      )
   }
}
const mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized
   }
}
const mapDispatchToProps = { initializeApp }
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(App)

