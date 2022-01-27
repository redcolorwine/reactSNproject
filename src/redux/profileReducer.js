import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
export let addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export let changeTextAreaActionCreator = (text) => {
    return {
        type: CHANGE_TEXT_AREA,
        message: text
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export let setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }
let initialState = {
    myPostData: [
        { id: 1, likes: 20, text: 'hello hi!' },
        { id: 2, likes: 10, text: 'how are u' },
        { id: 3, likes: 22, text: 'lets go to walk with me' },
        { id: 4, likes: 34, text: 'do u want it?!rly?' },
        { id: 5, likes: 150, text: 'we need to talk' }
    ],
    newPostText: 'helloHu',
    profile: null,
    status: " ",


}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                myPostData: [...state.myPostData, { id: 5, text: action.newPostText, likes: 777 }],
                newPostText: " "
            };

        case CHANGE_TEXT_AREA:
            return {
                ...state,
                newPostText: action.message
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            case SAVE_PHOTO_SUCCESS:
                return {
                    ...state,
                    profie:{...state.profile, photos:action.photos}
                   
                }
        default: return state;
    }

}

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status).then(response => {
            if (response.data.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}
export const savePhoto = (file) => {
    return (dispatch) => {
        usersAPI.savePhoto(file).then(response => {
            if (response.data.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        })
    }
}



export const saveProfile = (profile) => {
    return (dispatch,getState) => {
        const userId=getState.auth.userId;
        usersAPI.saveProfile(profile).then(response => {
            if (response.data.data.resultCode === 0) {
                dispatch(getUserProfileThunkCreator(userId))
            } else {
                dispatch(stopSubmit("editProfile",{_error:response.data.messages[0]}));
                return Promise.reject(response.data.messages[0]);
            }
        })
    }
}
// export const followUsersThunkCreator = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId));
//         usersAPI.follow(userId).then(response => {
//             if (response.data.resultCode == 0) {
//                 dispatch(followActionCreator(userId));
//             }
//             dispatch(toggleFollowingProgress(false, userId));
//         });
//     }

// }

export default profileReducer;