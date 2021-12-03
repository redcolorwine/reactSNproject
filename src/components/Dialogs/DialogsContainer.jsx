
import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeDialogArea:(message)=>{
            dispatch({
            type: 'ON-CHANGE-DIALOG-AREA',
            message: message,
        });},
        addDialogMessage:(message, userName)=>{  
            dispatch({
            type: 'ADD-MESSAGE',
            message: message,
            username: userName
        })}

    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;