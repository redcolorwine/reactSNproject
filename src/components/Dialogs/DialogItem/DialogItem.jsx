import cmedia from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import logo from './kawaii.png'

const DialogItem = (props) => {
    return (
        <div className={cmedia.dItem + ' ' + cmedia.active}>
            <img src={logo} alt="" />
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            
        </div>
    )
}


export default DialogItem;