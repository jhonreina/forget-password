import React from 'react';
import title from '../../assests/img/mainlogo-md.png'
import woman2 from '../../assests/img/woman2.jpg'
import './login.css'

const Login = () => {
    return (
        <div className="box">
      <form className="form">
        <img src={title} alt="titulo" className="title" />
        <h2 className="left">Sign In</h2>
        <h2 className="right">Sign Up</h2>
        <div className="container">
          <div className="input-container">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <a className="link" href="recover-password">Forgot Password?</a>          
          <input type="submit" value="Sign In" className="button" />        
          <div className="selector">
            <input
              type="checkbox"
              id="Remember Me"
              name="Remember Me"              
            />
            <label for="Remember Me">Remember Me</label>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            explicabo voluptatibus rerum eum quisquam saepe laudantium.
          </p>
        </div>
      </form>
      <div>
        <img
          src={woman2}
          alt="woman"          
         className="woman"/>      
      </div>
    </div>
    );
};

export default Login;