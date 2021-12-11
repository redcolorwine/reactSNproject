import MyPosts from './MyPosts';
import { addPostActionCreator, changeTextAreaActionCreator } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.myPostData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostActionCreator());
        },
        changeTextArea:(text)=>{  
            dispatch(changeTextAreaActionCreator(text));
        }

    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;