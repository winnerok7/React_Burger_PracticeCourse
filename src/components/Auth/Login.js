import React from "react";
import PropTypes from 'prop-types';

const Login = (props) => {
   return (
      <div className='login-container'>
         <nav className='login'>
            <h2>Authentication</h2>
            <p>Write your login and password from your Github account</p>
            <button className='github'
               onClick={() => props.authenticate()}
            >Log in</button>
         </nav>
      </div>
   )
}

Login.propTypes = {
   authenticate: PropTypes.func.isRequired
}

export default Login;