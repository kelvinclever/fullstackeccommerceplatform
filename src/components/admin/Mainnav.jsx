import './mainnav.css'
import { useContext } from 'react'
import { Context } from '../../context/admincontext/Context'
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
                <h1>this are customer</h1>
            </div>
            ):ui=="products"?(
                <div>
                <h1>products</h1>
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