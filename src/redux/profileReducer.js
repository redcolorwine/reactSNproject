import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export let changeTextAreaActionCreator = (text) => {
    return {
        type: CHANGE_TEXT_AREA,
        message: text
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
    profile: null

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                myPostData: [...state.myPostData, { id: 5, text: state.newPostText, likes: 777 }],
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