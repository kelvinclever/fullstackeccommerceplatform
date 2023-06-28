import './navbaradmin.css'
import { useState } from 'react'

const NavbarAdmin = ()=>{
    
    return(
        <div className='navbaradmin'>
            <div className='leftside'>
                <div className='admin'>
                     <span>A</span>
                     <span>D</span>
                     <span>M</span>
                     <span>I</span>
                     <span>N</span>
                </div>
                <div className='banner'>
                    <span>Q</span>
                    <span>*</span>
                    <span>C</span>
                    <span>*</span>
                    <span>S</span>
                </div>
            </div>
            <div className='rigtside'>
                   <button id='logout'>
                    logout
                   </button>
            </div>
        </div>
    )
}
export default NavbarAdmin