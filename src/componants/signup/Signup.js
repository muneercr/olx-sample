import React, { useState ,useContext} from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import 'firebase/firestore';


export default function Signup() {


  const fun=(e)=>{

  
  }
   
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const {firebase}=useContext(FirebaseContext)
    const history=useHistory();

   const signupSubmition=(e)=>{
      e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
        result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
           username:username,
           email:email,
           phone:phone,
           id:result.user.uid,
         }).then(()=>{
           history.push('/login')
         })
          
        })
        })

   }
  return (
    <div>
      <div className="signupParentDiv">
        <img className='olxIcon' src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png" alt="" />
        <form onSubmit={signupSubmition}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
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
          <button>Signup</button>
        </form>
        <a onClick={fun}>Login</a>
      </div>
    </div>
  );
}