


import './login.css'
const Login = () => {
    return (
      <div className='signup'>
        <form class="form">
          <p class="title"><button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;Login&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Login&nbsp;</span>
</button></p>
          <p class="message">Welome back </p>
         
  
          <label>
            <input required="" placeholder="" type="email" class="input" />
            <span>Email</span>
          </label>
  
          <label>
            <input required="" placeholder="" type="password" class="input" />
            <span>Password</span>
          </label>
          <button className='buttonlogin'>
    login
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
          <p class="signin">
            Dont have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    );
  };
  
  export default Login;
  