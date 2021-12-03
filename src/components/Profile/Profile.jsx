import MyPosts from "./MyPosts/Post/MyPosts";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import Post from "./MyPosts/Post/Post/Post";
import cmedia from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {

  return (
    <div className={cmedia.content}>
      <ProfileInfo back="https://live.staticflickr.com/65535/50151941487_714af20b28_b.jpg" proImg="https://pics.me.me/thumb_download-png-animuthinku-thinking-meme-face-anime-png-53984190.png" />
      <br></br>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;