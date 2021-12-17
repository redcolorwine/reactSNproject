import React from "react";
import cmedia from './usersC.module.css'
import logo1 from '../../media/animka1.jpg'
import { NavLink } from "react-router-dom";
import * as axios from 'axios'
let UsersC = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((page) => {
                    return (<span onClick={(e) => { props.onPageChanged(page); }} className={props.currentPage === page && cmedia.selectedPage}>{page}</span>)
                })}
            </div>
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
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ul.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY":"22479db7-b7b8-42f8-9c53-d72bdb4b8d8f"
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(ul.id);
                                                }
                                            });


                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ul.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY":"22479db7-b7b8-42f8-9c53-d72bdb4b8d8f"
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(ul.id);
                                                }
                                            });


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