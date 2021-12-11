import { connect } from "react-redux"
import Users from "./users"

let mapStateToProps=(state)=>{
    return{
        users:state.userPage.users,
        butVal:state.userPage.butVal
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        onButtonAdd : () => {
            dispatch(
                {type:'ADD_USER'});
        },
        onFollowbut : ()=>{
            dispatch(
                {type:'FOLLOW'});
        }
    }
}

const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;