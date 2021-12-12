import * as axios from 'axios'
import React from 'react'
import UsersC from './UsersC';

class UsersAPIComponent extends React.Component {


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
        return  <UsersC pageSize={this.props.pageSize} 
        totalUsersCount={this.props.totalUsersCount} 
        unfollow={this.props.unfollow} 
        follow={this.props.follow} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        />
    }
}

export default UsersAPIComponent;