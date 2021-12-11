import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersCReducer"
import UsersClass from "./UsersClass"

let mapStateToProps = (state) => {
    return {
        users: state.userPageC.users,
        pageSize: state.userPageC.pageSize,
<<<<<<< HEAD
        totalUsersCount: state.userPageC.totalUsersCount,
        currentPage: state.userPageC.currentPage
=======
        totalUsersCount: state.userPageC.totalUsersCount
>>>>>>> a9e404b65585935683e7e99a2a6024122b198756
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
        setUsers: (users)=>{
            dispatch(setUsersActionCreator(users));
<<<<<<< HEAD
        },
        setPage: (currentPage)=>{
            dispatch({
                type: 'SET_PAGE',
                currentPage:currentPage
            })
        },
        setTotalUsersCount: (usersCount)=>{
            dispatch({
                type: 'SET_TOTALUSERS',
                totalUsersCount: usersCount
            })
=======
>>>>>>> a9e404b65585935683e7e99a2a6024122b198756
        }
    }
}

const UsersCContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersCContainer;