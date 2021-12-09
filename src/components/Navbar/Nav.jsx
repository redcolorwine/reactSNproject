import cmedia from "./Nav.module.css"
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
const Nav = (props) => {

      let friends = props.navstore.getState().sidePage.friendsList.map((el) => {
        return (
          <Friends name={el.name} key={el.id} id={el.id} />
        );
      })
    
      return (
        <nav className={cmedia.nav}>
          <div className={cmedia.ndiv}>
            <NavLink to="/profile" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>Profile</NavLink>
          </div>
          <div className={cmedia.ndiv}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>Messages</NavLink>
          </div>
          <div className={cmedia.ndiv}>
            <NavLink to="/news" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>News</NavLink>
          </div>
          <div className={cmedia.ndiv}>
            <NavLink to="/music" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>Music</NavLink>
          </div>
          <div className={cmedia.ndiv}>
            <NavLink to="/users" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>Users</NavLink>
          </div>
          <div className={cmedia.ndiv}>
            <NavLink to="/usersC" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>UsersCourse</NavLink>
          </div>
          <div className={cmedia.ndiv}>
            <NavLink to="/settings" className={navData => navData.isActive ? cmedia.active : cmedia.ndiv}>Settings</NavLink>
          </div>
    
          <div className={cmedia.friends}>
            <p>Friends online: </p>
            {friends}
          </div>
        </nav>
      )
     }

  

export default Nav;