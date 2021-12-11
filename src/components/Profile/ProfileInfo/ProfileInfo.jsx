
import cmedia from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {
  return (
    <div className="profContent">
      <div className={cmedia.backImg} >
        <img alt="img1" src={props.back}></img>
      </div>
      <div className={cmedia.profImg}>
        <img src={props.proImg} alt="img2" />
        <div className={cmedia.profileText}>
          Syugho Sakhuro
          <p>Date of Birth: 1 March<br></br>City:Tokyo<br></br></p>
        </div>
      </div>
    </div>

  )
}
export default ProfileInfo;