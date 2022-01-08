import cmedia from './Dialogs.module.css'
import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/formControls/FormControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
let itext = React.createRef();

const Dialogs = (props) => {

    let onChangeDialogArea = () => {
        let message = itext.current.value;
        props.onChangeDialogArea(message);
    }
    function addDialogMessage() {
        let message = itext.current.value;
        let userName = "Sofia";
        props.addDialogMessage(message, userName);
    }
    let dialogElements = props.dialogsData.map(el => {
        return (<DialogItem id={el.id} key={el.id} name={el.name} />);

    })
    let messageElements = props.messagesData.map(m => {
        return (<Message key={m.id} message={m.message} />);
    })

    let addNewMessage = (values) => {
        let message = values.newMessageBody;
        let userName = "Polya";
        props.addDialogMessage(message, userName);
    }

    return (
        <div className={cmedia.dialogs}>
            <div className={cmedia.dialogsItems}>
                {dialogElements}
            </div>
            <div className={cmedia.messages}>
                {messageElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
            {/* <input className={cmedia.postText} onChange={onChangeDialogArea} type="text" placeholder="your news" ref={itext} value={props.dialogMessage} />
                <input className={cmedia.postBut} type="button" value="send" onClick={addDialogMessage} /> */}
        </div>
    )
}
let maxLength=maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cmedia.post}>
            <Field component={TextArea} validate={[requiredField,maxLength]} name="newMessageBody" className={cmedia.postText} />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;