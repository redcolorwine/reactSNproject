import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersCReducer"
import UsersClass from "./UsersClass"

let mapStateToProps = (state) => {
    return {
        users: state.userPageC.users
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
        }
    }
}

const UsersCContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersCContainer;