import { Context } from "../../context/customercontext/customer.context"
import { useContext } from "react"

const AccountInfo=()=>{
    const {user}=useContext(Context)
    return (
        <div className='profile'>
            <div className="userAvator">
               
            </div>
            <div className="user-Details">
                <h2>Username</h2>
                <h2>Email</h2>
                <p>{user.email}</p>
                <h2>User-Id</h2>
                <p>{user.id}</p>
            </div>
        </div>
    )
}
export default  AccountInfo