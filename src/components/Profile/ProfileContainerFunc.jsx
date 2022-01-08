import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getUserProfileThunkCreator,getStatusThunkCreator,updateStatusThunkCreator } from '../../redux/profileReducer'
import { Navigate, useMatch, useParams } from 'react-router-dom';
import { usersAPI } from '../../api/api'
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainerFunc = (props) => {

  let { userId } = useParams()

  if (!userId) {
    userId = props.authorizeduserId;
    if(!userId){
      props.history.push("/login");
    }
  }
  // usersAPI.getUserProfile(userId).then(response => {
  //     props.setUserProfile(response.data);
  //   })

  props.getUserProfileThunkCreator(userId);
  props.getStatusThunkCreator(userId);
 return(<Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatusThunkCreator}/>)


}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth,
    status:state.profilePage.status,
    authorizeduserId:state.auth.userId
  }
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainerFunc);

// export default connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator,updateStatusThunkCreator, getStatusThunkCreator }),
  WithAuthRedirect
)(ProfileContainerFunc)