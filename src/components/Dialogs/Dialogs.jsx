import cmedia from './Dialogs.module.css'
import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
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
    return (
        <div className={cmedia.dialogs}>
            <div className={cmedia.dialogsItems}>
                {dialogElements}
            </div>
            <div className={cmedia.messages}>
                {messageElements}
            </div>
            <form action={cmedia.post}>
                <input className={cmedia.postText} onChange={onChangeDialogArea} type="text" placeholder="your news" ref={itext} value={props.dialogMessage} />
                <input className={cmedia.postBut} type="button" value="send" onClick={addDialogMessage} />

            </form>
        </div>
    )
}

export default Dialogs;