import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/firebaseContext';
import './Login.css';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory();



  const loginSubmition=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
       alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
      <img className='olxIcon' src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png" alt="" />
        <form onSubmit={loginSubmition}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;