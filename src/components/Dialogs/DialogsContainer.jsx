import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeDialogArea: (message) => {
            dispatch({
                type: 'ON-CHANGE-DIALOG-AREA',
                message: message,
            });
        },
        addDialogMessage: (message, userName) => {
            dispatch({
                type: 'ADD-MESSAGE',
                message: message,
                username: userName
            })
        }

    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

// let AuthRedirect = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect);

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);