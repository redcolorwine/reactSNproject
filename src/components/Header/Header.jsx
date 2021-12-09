import cmedia from "./Header.module.css"
import logo from '../../media/anim.png'

const Header=()=>{
    return(
        <header className={cmedia.header}>
        <img alt="logoimg" src={logo}></img>
        <span id={cmedia.ht}>AnimaSocial Net</span>
      </header>
    )
}

export default Header;