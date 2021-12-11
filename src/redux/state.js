
import sideBarRecuder from "./sideBarReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const CHANGE_DIALOG_AREA = 'ON-CHANGE-DIALOG-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
    _state: {
        profilePage: {
            myPostData: [
                { id: 1, likes: 20, text: 'hello hi!' },
                { id: 2, likes: 10, text: 'how are u' },
                { id: 3, likes: 22, text: 'lets go to walk with me' },
                { id: 4, likes: 34, text: 'do u want it?!rly?' },
                { id: 5, likes: 150, text: 'we need to talk' }
            ],
            newPostText: 'helloHu'

        },
        messagesPage: {
            messagesData: [
                { id: 1, message: 'hello hi!' },
                { id: 2, message: 'how are u' },
                { id: 3, message: 'lets go to walk with me' },
                { id: 4, message: 'do u want it?!rly?' },
                { id: 5, message: 'we need to talk' }
            ],
            dialogsData: [
                { id: 1, name: 'Sonya' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Elvira' },
                { id: 4, name: 'Katya' },
                { id: 5, name: 'Sasha' }
            ],
            dialogMessage: 'ur dialog'
        },
        sidePage: {
            friendsList: [
                { id: 1, name: 'Sveta' },
                { id: 2, name: 'Sonya' },
                { id: 3, name: 'Eva' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Elvira' },
                { id: 6, name: 'Katya' },
                { id: 7, name: 'Sara' },
                { id: 8, name: 'Vika' }
            ]
        },


    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._state.sidePage = sideBarRecuder(this._state.sidePage, action);

        this._callSubscriber(this._state);
    }

}



export default store;