import { connect } from "react-redux"
import { followActionCreator, followUsersThunkCreator, getUsersThunkCreator, toggleFollowingProgress, unfollowActionCreator, unfollowUsersThunkCreator } from "../../redux/usersCReducer"
import React from "react";
import UsersC from './UsersC';
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../api/api";
import {getCurrentPage, getFetching, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersSuperSelector} from "../../redux/usersSelectors"
class UsersCContainer extends React.Component {


    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

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
                followUsersThunkCreator={this.props.followUsersThunkCreator}
                unfollowUsersThunkCreator={this.props.unfollowUsersThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingInProgress(state)

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
        toggleFollowingProgress: (isFetching, userId) => {
            dispatch(toggleFollowingProgress(isFetching, userId))
        },
        getUsersThunkCreator: (currentPage, pageSize) => { dispatch(getUsersThunkCreator(currentPage, pageSize)) },
        followUsersThunkCreator: (userId) => {
            dispatch(followUsersThunkCreator(userId));
        },
        unfollowUsersThunkCreator: (userId) => {
            dispatch(unfollowUsersThunkCreator(userId));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersCContainer);