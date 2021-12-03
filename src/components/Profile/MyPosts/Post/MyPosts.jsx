import cmedia from './MyPosts.module.css'
import React from 'react';
import Post from './Post/Post';
import state, { addPostActionCreator, changeTextAreaActionCreator } from '../../../../redux/profileReducer'
import { rerenderTree } from '../../../../index'


const MyPosts = (props) => {
    let itext = React.createRef();

    function addPost() {
        props.addPost();
    }
    let onPostChange = () => {
        let text=itext.current.value;
        props.changeTextArea(text);
    }
    let postElements = props.posts.map(post => {
        return (<Post likes={post.likes} itext={post.text} />);
    })
    return (
        <div className="content">
            <div className={cmedia.Posts}>
                <div>
                    My posts
                </div>

                <div className={cmedia.curPost}>
                    <form action={cmedia.post}>
                        <input className={cmedia.postText} onChange={onPostChange} type="text" placeholder="your news" ref={itext} value={props.newPostText} />
                        <input className={cmedia.postBut} type="button" value="send" onClick={addPost
                        } />
                    </form>
                </div>
            </div>
            <div className={cmedia.posts}>

                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;