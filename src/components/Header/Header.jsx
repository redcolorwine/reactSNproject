import cmedia from "./Header.module.css"
import logo from '../../media/anim.png'
import { NavLink } from "react-router-dom";

const Header=(props)=>{
    return(
        <header className={cmedia.header}>
        <img alt="logoimg" src={logo}></img>
        <span id={cmedia.ht}>AnimaSocial Net</span>
        <div className={cmedia.loginblock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>} 
          
        </div>
      </header>
    )
}

export default Header;