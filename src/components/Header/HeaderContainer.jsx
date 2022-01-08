import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuthUserData, getAuthUserThunkCreator, logout} from '../../redux/authReducer'
import { usersAPI } from "../../api/api";
class HeaderContainer extends React.Component {



  render() {
    return (
      <Header {...this.props}/>
      )
  }
}
const mapStateToProps=(state)=>{
  return{
    isAuth:state.auth.isAuth,
    login:state.auth.login
  }
}
export default connect(mapStateToProps,{setAuthUserData, getAuthUserThunkCreator, logout}) (HeaderContainer);
