import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getUserProfileThunkCreator } from '../../redux/profileReducer'
import { Navigate, useMatch, useParams } from 'react-router-dom';
import { usersAPI } from '../../api/api'
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainerFunc = (props) => {

  let { userId } = useParams()

  if (!userId) {
    userId = '2';
  }
  // usersAPI.getUserProfile(userId).then(response => {
  //     props.setUserProfile(response.data);
  //   })

  props.getUserProfileThunkCreator(userId);
  
 return(<Profile {...props}/>)


}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
  }
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainerFunc);

// export default connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator }),
  WithAuthRedirect
)(ProfileContainerFunc)