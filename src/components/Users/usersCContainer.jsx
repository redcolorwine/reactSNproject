import { connect } from "react-redux"
import { followActionCreator, setToggleIsFetching, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersCReducer"
import React from "react";
import * as axios from 'axios';
import UsersC from './UsersC';
import Preloader from "../common/preloader/preloader";
class UsersCContainer extends React.Component {


    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentpage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount / 500)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersC pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPageC.users,
        pageSize: state.userPageC.pageSize,
        totalUsersCount: state.userPageC.totalUsersCount,
        currentPage: state.userPageC.currentPage,
        isFetching: state.userPageC.isFetching

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setPage: (currentPage) => {
            dispatch({
                type: 'SET_PAGE',
                currentPage: currentPage
            })
        },
        setTotalUsersCount: (usersCount) => {
            dispatch({
                type: 'SET_TOTALUSERS',
                totalUsersCount: usersCount
            })
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetching(isFetching))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersCContainer);