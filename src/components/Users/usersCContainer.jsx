import { connect } from "react-redux"
import { followActionCreator, setToggleIsFetching, setUsersActionCreator, toggleFollowingProgress, unfollowActionCreator } from "../../redux/usersCReducer"
import React from "react";
import UsersC from './UsersC';
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../api/api";

class UsersCContainer extends React.Component {


    componentDidMount() {
        this.props.setToggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount / 300)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.items);
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.userPageC.isFetching,
        followingInProgress: state.userPageC.followingInProgress

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
        },
        toggleFollowingProgress: (isFetching)=>{
            dispatch(toggleFollowingProgress(isFetching))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersCContainer);