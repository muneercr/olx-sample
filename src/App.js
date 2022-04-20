
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useContext, useEffect } from 'react';
import { Authcontext,FirebaseContext } from './store/firebaseContext';
import Create from './componants/create/Create';
import View from './componants/view/View';
import Post from './store/postContext';


function App() {

    const {setUser}=useContext(Authcontext)
    const {firebase}=useContext(FirebaseContext)


  useEffect(() => {
    
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })

  }, []);


  return (
    <div>
     
      <Router>
      <Switch><Post>
            <Route exact path="/" component={Home} /> 
            <Route path="/login" component={LoginPage} /> 
            <Route path="/signup" component={SignUp} /> 
            <Route path="/create" component={Create} /> 
            <Route path="/view" component={View} /> 
            </Post>
          </Switch>
         
      </Router>
    </div>
  );
}

export default App;
