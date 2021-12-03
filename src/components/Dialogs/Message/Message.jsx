import cmedia from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Message = (props) => {
    return (
        <div className={cmedia.messageItem}>
            {props.message}
        </div>
    )
}

export default Message;