import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Music from './components/Music/music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

import UsersContainer from './components/Users/usersmine/usersContainer';

import UsersCContainer from './components/Users/usersCContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileContainerFunc from './components/Profile/ProfileContainerFunc';
import HeaderContainer from './components/Header/HeaderContainer';
const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav navstore={props.navstore} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="profile" element={<ProfileContainerFunc />}>
              <Route path=":userId" element={<ProfileContainerFunc />} />
            </Route>
            <Route path="/profileOld/*" element={<ProfileContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/usersC" element={<UsersCContainer />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
