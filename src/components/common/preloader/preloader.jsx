import preloader from '../../../media/loader.svg'
import cmedia from '../../Users/usersC.module.css'

const Preloader = (props) => {
    return (
        <div>
            <img alt="" className={cmedia.preloader} src={preloader} />
        </div>
    )
}

export default Preloader;