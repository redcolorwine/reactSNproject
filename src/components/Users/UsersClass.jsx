import cmedia from './usersC.module.css'
import * as axios from 'axios'
import logo1 from '../../media/animka1.jpg'
import React from 'react'

class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentpage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount/500)
        });
    }

onPageChanged=(pageNumber)=>{
    this.props.setPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
}

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map((page) => {
                    return (<span onClick={(e)=>{this.onPageChanged(page);}} className={this.props.currentPage === page && cmedia.selectedPage}>{page}</span>)
                })}
            </div>
            {
                this.props.users.map((ul) => {
                    return <div key={ul.id} >
                        <span>
                            <div>
                                <img src={ul.photos.small != null ? ul.photos.small : logo1} className={cmedia.UsersPhoto} alt="" />
                            </div>
                            <div>
                                {ul.followed
                                    ? <button onClick={() => { this.props.unfollow(ul.id) }}>unfollow</button>
                                    : <button onClick={() => { this.props.follow(ul.id) }}>follow</button>}

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
    }
}

export default Users;