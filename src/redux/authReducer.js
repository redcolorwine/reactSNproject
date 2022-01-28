import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,

            };

        case GET_CAPTCHA_URL_SUCCESS:

            return {
                ...state,
                captchaUrl: action.captchaUrl

            };

        default: return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth }
    }
}
export const getCapthcaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        data: { captchaUrl }
    }
}
/* БЫЛО ДО ASYNC
export const getAuthUserThunkCreator = () => {
    return (dispatch) => {
        usersAPI.getAuthUser().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}
*/
// C ASYNC
export const getAuthUserThunkCreator = () => {
    return async (dispatch) => {
        let response = await usersAPI.getAuthUser();
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }

    }
}

export const login = (email, password, rememberme, captcha) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberme,captcha).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserThunkCreator());
            } 
            else {
                if (response.data.resultCode === 10){
                    dispatch(getCaptchaUrl());
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", { _error: message }));
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        usersAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export const getCaptchaUrl = () => {
    return (dispatch) => {
        usersAPI.getCaptchaUrl().then(response => {
            const captchaUrl = response.data.url
            dispatch(getCapthcaUrlSuccess(captchaUrl));

        });
    }
}
export default authReducer;