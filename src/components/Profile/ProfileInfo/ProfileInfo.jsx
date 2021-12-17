
import Preloader from "../../common/preloader/preloader";
import cmedia from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className="profContent">

      <div className={cmedia.backImg} >
        <img alt="img1" src={props.back}></img>
      </div>

      <div className={cmedia.profImg}>

        {/* <img src={props.proImg} alt="img2" /> */}
        <div className={cmedia.profileText}>
          <img src={props.profile.photos.large} alt="" />
          <p>{props.profile.fullName}</p>
          <p>{props.profile.aboutMe}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
          <div>
            Контакты:
            <ul className={cmedia.ulbout}>
              <li>facebook : {props.profile.contacts.facebook}</li>
              <li>website : {props.profile.contacts.website}</li>
              <li>vk : {props.profile.contacts.vk}</li>
              <li>twitter : {props.profile.contacts.twitter}</li>
              <li>instagram : {props.profile.contacts.instagram}</li>
              <li>youtube : {props.profile.contacts.youtube}</li>
              <li>github : {props.profile.contacts.github}</li>
              <li>mainLink : {props.profile.contacts.mainLink}</li>
            </ul>
          </div>
        </div>

      </div>

    </div>

  )
}
export default ProfileInfo;