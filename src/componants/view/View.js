import React, {useContext,useEffect,useState}from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import { postContext } from '../../store/postContext';

import './View.css';
function View() {


  const {firebase}=useContext(FirebaseContext)
  const {postD}=useContext(postContext)
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const {userID} = postD
    firebase.firestore().collection("usersD").where('id','==',userID).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      
       
      })
    })

  }, []);
 
  return (
   <div className="viewParentDiv">
      <div className="imageShowDiv">
       <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p></p>
          <span>{postD.name}</span>
          <p>{postD.category}</p>
          <span>{postD.createdAt}</span>
        </div>
     {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;