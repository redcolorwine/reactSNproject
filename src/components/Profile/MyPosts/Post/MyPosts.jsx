import cmedia from './MyPosts.module.css'
import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validator';
import { TextArea } from '../../../common/formControls/FormControls';


const maxLength10=maxLengthCreator(10);

const MyPosts = React.memo((props) => {
    let itext = React.createRef();

    function addPost(values) {
        props.addPost(values.newPostText);
    }
    let onPostChange = () => {
        let text = itext.current.value;
        props.changeTextArea(text);
    }
    let postElements = props.posts.map(post => {
        return (<Post likes={post.likes} key={post.id} itext={post.text} />);
    })
    return (
        <div className="content">
            <div className={cmedia.Posts}>
                <div>
                    My posts
                </div>

                <div className={cmedia.curPost}>
                    <AddNewPostFormRedux onSubmit={addPost}/>
                </div>
            </div>
            <div className={cmedia.posts}>

                {postElements}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cmedia.post}>
            {/* <input className={cmedia.postText} onChange={onPostChange} type="text" placeholder="your news" ref={itext} value={props.newPostText} />
            <input className={cmedia.postBut} type="button" value="send" onClick={addPost} /> */}
            <Field component={TextArea} validate={[requiredField, maxLength10]} type="text" name="newPostText" placeholder="your news"/>
            <button className={cmedia.postBut}>Send</button>
        </form>
    )
}

let AddNewPostFormRedux=reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)
export default MyPosts;