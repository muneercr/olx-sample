import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Authcontext,FirebaseContext} from '../../store/firebaseContext';
import {useHistory} from 'react-router-dom'



function Header() {

 const {user}=useContext(Authcontext)
 const {firebase}=useContext(FirebaseContext)

 const history=useHistory();


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
       <span>{user ? user.displayName:'login'}</span> 
          <hr />
        </div>
        {user && <span onClick={()=>{
         firebase.auth().signOut();
          history.push('/login')
 } }>Loguot</span> }

        <div className="sellMenu">
          <SellButton ></SellButton>
          <div onClick={()=>{
            history.push('/create')
          }} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
