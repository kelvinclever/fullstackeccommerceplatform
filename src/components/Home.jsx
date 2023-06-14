import home from '../images/home.png';
import './home.css'
const Home=()=>{
    return(
        <div className='home'>
            <img src={home} alt="." className='home_image'/>
            <h1>this home</h1>
        </div>
    )
}
export default Home