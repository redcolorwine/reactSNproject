import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Music from './components/Music/music';

import News from './components/News/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {initializeApp} from "./redux/appReducer"
import UsersContainer from './components/Users/usersmine/usersContainer';
import { setAuthUserData, getAuthUserThunkCreator, logout } from './redux/authReducer'
import UsersCContainer from './components/Users/usersCContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileContainerFunc from './components/Profile/ProfileContainerFunc';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/preloader';
// import Settings from './components/Settings/Settings';
const Settings = React.lazy(()=> import('./components/Settings/Settings'));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav navstore={this.props.navstore} />
          <div className="app-wrapper-content">
          <React.Suspense fallback={<Preloader/>}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="profile" element={<ProfileContainerFunc />}>
                <Route path=":userId" element={<ProfileContainerFunc />} />
              </Route>
              <Route path="/profileOld/*" element={<ProfileContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/news" element={<News />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/usersC" element={<UsersCContainer />} />
            </Routes>
            </React.Suspense>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    initialized:state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
