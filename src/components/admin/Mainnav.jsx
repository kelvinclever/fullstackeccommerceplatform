import './mainnav.css'
import { useContext } from 'react'
import ProductsAdmin from './ProductsAdmin.jsx'
import { Context } from '../../context/admincontext/Context'
import Customers from './Customers'
import UserAdmin from './UserAdmin.jsx'
import Profile from './Profile'
import Orders from './Orders.jsx'
const Mainnav=()=>{
    const {ui}=useContext(Context)
    console.log(ui)
    return(
        <div className="mainnav">
            { 
            ui=="profile"?(<div>
            <Profile/>
        </div>
            ):ui=="customers"?(
                 <div>
               <Customers/>
            </div>
            ):ui=="products"?(
                <div>
                    <ProductsAdmin/>
            </div> 
            ):ui=="orders"?(
                <div>
                <Orders/>
            </div> 
            ): ui=="admins"?(
                <div>
                    <UserAdmin/>
                </div>
            ):null
            
            }
           
           
           
        </div>
    )
}
export default Mainnav