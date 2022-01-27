import animka from '../../../media/animka3.jpg';
import Preloader from "../../common/preloader/preloader";
import cmedia from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
import { useState } from 'react';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from './ProfileDataForm';
import { saveProfile } from '../../../redux/profileReducer';
const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      props.savePhoto(e.target.files[0]);
    }
  }
  if (!props.profile) {
    return <Preloader />
  }
  const onSubmit = (formData) => {
     saveProfile(formData).then(
       ()=>{
      setEditMode(false);
     });
    

  }
  return (
    <div className="profContent">

      <div className={cmedia.backImg} >
        <img alt="img1" src={props.back}></img>
      </div>

      <div className={cmedia.profImg}>

        {/* <img src={props.proImg} alt="img2" /> */}
        <img src={props.profile.photos.large || animka} alt="" />
        {props.isOwner && <input type="file" onChange={() => props.onMainPhotoSelected} />}

        {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} /> : <ProfileData goToEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} profile={props.profile} />}


      </div>

    </div>

  )
}

const ProfileData = (props) => {
  return (
    <div className={cmedia.profileText}>
      {props.isOwner && <div>
        <button onClick={props.goToEditMode}>edit</button>
      </div>}
      <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
      <p>{props.profile.fullName}</p>
      <p>{props.profile.aboutMe}</p>
      <p>{props.profile.lookingForAJobDescription}</p>
      <div>
        Контакты:
        {Object.keys(props.profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div>
    <b>
      {contactTitle}: {contactValue}
    </b>
  </div>
}

export default ProfileInfo;