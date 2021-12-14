import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
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
const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
          <Nav navstore={props.navstore}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile  />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/usersC" element={<UsersCContainer/>} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
