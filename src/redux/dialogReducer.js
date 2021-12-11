const CHANGE_DIALOG_AREA = 'ON-CHANGE-DIALOG-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    var lenghtD = state.messagesData.length + 1;
    var namz = action.username + ' ' + lenghtD;
    switch (action.type) {
        case CHANGE_DIALOG_AREA:
            return {
                ...state,
                dialogMessage: action.message
            };

        case ADD_MESSAGE:

            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: state.dialogMessage }],
                dialogsData: [...state.dialogsData, { id: 6, name: namz }],
            };

        default: return state;
    }

}

export default dialogReducer;