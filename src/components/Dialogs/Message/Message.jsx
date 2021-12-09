import cmedia from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={cmedia.messageItem}>
            {props.message}
        </div>
    )
}

export default Message;