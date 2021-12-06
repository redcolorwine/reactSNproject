const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
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

let initialState={
    myPostData: [
        { id: 1, likes: 20, text: 'hello hi!' },
        { id: 2, likes: 10, text: 'how are u' },
        { id: 3, likes: 22, text: 'lets go to walk with me' },
        { id: 4, likes: 34, text: 'do u want it?!rly?' },
        { id: 5, likes: 150, text: 'we need to talk' }
    ],
    newPostText: 'helloHu'

}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            var newPost = {
                id: 5,
                text: state.newPostText,
                likes: 777
            };
            let stateCopy = {...state};
            stateCopy.myPostData=[...state.myPostData];
            stateCopy.myPostData.push(newPost);
            stateCopy.newPostText = " ";
            return stateCopy;
            break;
        }
        case CHANGE_TEXT_AREA:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.message;
            return stateCopy;
            break;
        }
        default: return state;
    }

}

export default profileReducer;