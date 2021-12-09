import UserItem from './userItem';
import cmedia from './users.module.css'

const Users=(props)=>{
    let mUsers=props.users.map((el)=>{
        return (<UserItem onFollowbut={props.onFollowbut} butVal={props.butVal} name={el.name} country={el.country} message={el.message}/>)
    })

    return(
        <div className={cmedia.main}>
            <h1>Users</h1>
            {mUsers}
            <div className={cmedia.showMo}>
                <input  onClick={props.onButtonAdd} className={cmedia.sBut} type="button" value="show more" />
            </div>
        </div>
    )
}

export default Users;