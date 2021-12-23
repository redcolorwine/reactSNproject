import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getUserProfileThunkCreator } from '../../redux/profileReducer'
import { useMatch, useParams } from 'react-router-dom';
import { usersAPI } from '../../api/api'

const ProfileContainerFunc = (props) => {

  let { userId } = useParams()

  if (!userId) {
    userId = '2';
  }
  // usersAPI.getUserProfile(userId).then(response => {
  //     props.setUserProfile(response.data);
  //   })

  props.getUserProfileThunkCreator(userId);
  return (

    <Profile {...props} profile={props.profile} />
  )


}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}



export default connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator })(ProfileContainerFunc);