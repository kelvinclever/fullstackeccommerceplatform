


import './login.css'
const Login = () => {
    return (
      <div className='signup'>
        <form className="form">
          <p className="title"><button data-text="Awesome" className="button">
    <span className="actual-text">&nbsp;Login&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;Login&nbsp;</span>
</button></p>
          <p className="message">Welome back </p>
         
  
          <label>
            <input required="" placeholder="" type="email" className="input" />
            <span>Email</span>
          </label>
  
          <label>
            <input required="" placeholder="" type="password" className="input" />
            <span>Password</span>
          </label>
          <button className='buttonlogin'>
    login
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
</button>
          <p className="signin">
            Dont have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    );
  };
  
  export default Login;
  