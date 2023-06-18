import logo from '../images/logo.png';
import { BiSearch } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';
import { BiLogIn} from 'react-icons/bi'
import {SiGnuprivacyguard} from 'react-icons/si'
import './search.css'
const Search =()=>{
    return (

        <div className="logo">
        <img src={logo} alt="logo" />
        <div class="container">
            <input type="text" name="text" class="input" placeholder="Search here..."/>
            <button class="search__btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#efeff1"></path>
                </svg>
            </button>
            </div>
        <ul>
        <li>
          <a href="/login" className="menu-item">
            login <BiLogIn />
          </a>
        </li>
        <li>
          <a href="/signup" className="menu-item">
            signup <SiGnuprivacyguard />
          </a>
        </li>
            <li>
          <a href="/products/cart">
            <span className="cart">
              <BsCart4 id="icon-search" />
            </span>
          </a>
          <span id="cart-add">0</span>
          <span>toggle Dark</span>
        </li>
        </ul>
      </div>

    )
}
export default Search