import './mainnav.css'
import { useContext } from 'react'
import ProductsAdmin from './ProductsAdmin.jsx'
import { Context } from '../../context/admincontext/Context'
import Customers from './Customers'
const Mainnav=()=>{
    const {ui}=useContext(Context)
    console.log(ui)
    return(
        <div className="mainnav">
            { 
            ui=="profile"?(<div>
            <h1>profile</h1>
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
                <h1>orders</h1>
            </div> 
            ): null
            
            }
           
           
           
        </div>
    )
}
export default Mainnav