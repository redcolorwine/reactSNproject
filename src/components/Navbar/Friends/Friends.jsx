import cmedia from './Friends.module.css'
import logo from '../../../media/avanime.png'
const Friends=(props)=>{
    return (
        <div className={cmedia.friend}>
            <img src={logo} alt="" />
            <div>{props.name}</div>
        </div>
    )
}

export default Friends;