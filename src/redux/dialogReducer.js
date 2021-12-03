const CHANGE_DIALOG_AREA = 'ON-CHANGE-DIALOG-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState={
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
const dialogReducer = (state=initialState, action) => {

    switch (action.type) {
        case CHANGE_DIALOG_AREA:
            state.dialogMessage = action.message;
            return state;
        case ADD_MESSAGE:
            var lenghtD = state.messagesData.length + 1;
            var namz = action.username + ' ' + lenghtD;
            let newMessage = {
                id: 6,
                message: state.dialogMessage
            }
            let newDialog = {
                id: 6,
                name: namz
            }
            state.messagesData.push(newMessage);
            state.dialogsData.push(newDialog);
            return state;
        default: return state;
    }

}

export default dialogReducer;