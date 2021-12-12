import cmedia from './users.module.css'
import logo1 from '../../../media/animka1.jpg'
import React from 'react'
import { createRef } from 'react'
let bref = React.createRef();

const UserItem = (props) => {
  
    return (
        <div className={cmedia.itemMain}>
            <div className={cmedia.ibut}>
                <img src={logo1} alt="" />
                <input ref={bref} id={cmedia.follow} onClick={props.onFollowbut} value={props.butVal} type="button" />

            </div>

            <div className={cmedia.userItem}>
                <div className={cmedia.itemArea}>
                    <div className={cmedia.UserName}>User {props.name}</div> 
                    <div className={cmedia.Country}>{props.country}</div>
                    <div className={cmedia.Message}>{props.message}</div>
                </div>


            </div>
        </div>
    )
}

export default UserItem;