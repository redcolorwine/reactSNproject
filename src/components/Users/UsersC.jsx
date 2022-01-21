import React from "react";
import cmedia from './usersC.module.css';
import logo1 from '../../media/animka1.jpg';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import { usersAPI } from '../../api/api';
import Paginator from "./paginator";
let UsersC = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
       <div> <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
            {
                props.users.map((ul) => {
                    return <div key={ul.id} >
                        <span>
                            <div>
                                <NavLink to={'/profile/' + ul.id}>
                                    <img src={ul.photos.small != null ? ul.photos.small : logo1} className={cmedia.UsersPhoto} alt="" />
                                </NavLink>
                            </div>
                            <div>
                                {ul.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === ul.id)} onClick={() => {
                                        props.unfollowUsersThunkCreator(ul.id);

                                    }}>unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === ul.id)} onClick={() => {

                                        props.followUsersThunkCreator(ul.id);

                                    }}>follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{ul.name}</div>
                                <div>{ul.status}</div>
                            </span>
                            <span>
                                {/* <div>{ul.location.country}</div> */}
                                {/* <div>{ul.location.city}</div> */}
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    )
}

export default UsersC;