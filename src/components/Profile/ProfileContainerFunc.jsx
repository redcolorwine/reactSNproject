import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from '../../redux/profileReducer'
import { useMatch, useParams } from 'react-router-dom';


const ProfileContainerFunc = (props) => {

  let {userId} = useParams()

  if(!userId){
      userId = '2';
  }

  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
    .then(response => {
      props.setUserProfile(response.data);
    })


  return (

    <Profile {...props} profile={props.profile} />
  )


}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}



export default connect(mapStateToProps, { setUserProfile })(ProfileContainerFunc);