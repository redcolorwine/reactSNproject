import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersCReducer"
import UsersAPIComponent from "./UsersAPIComponent"


let mapStateToProps = (state) => {
    return {
        users: state.userPageC.users,
        pageSize: state.userPageC.pageSize,
        totalUsersCount: state.userPageC.totalUsersCount,
        currentPage: state.userPageC.currentPage
        
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
        }
    }
}

const UsersCContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersCContainer;