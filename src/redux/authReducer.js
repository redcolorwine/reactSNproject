import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isAuth:false
};

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:
           
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default: return state;
    }

}

export const setAuthUserData=(userId,email,login)=>{
  return  {
        type: SET_USER_DATA,
        data:{userId,email,login}
    }
}

export const getAuthUserThunkCreator=()=>{
    return(dispatch)=>{
        usersAPI.getAuthUser().then(response => {
            if(response.data.resultCode===0){
              let {id,login,email}=response.data.data;
              dispatch(setAuthUserData(id,email,login));
            }
         });
    }
}



export default authReducer;