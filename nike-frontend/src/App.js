/*
importing the react from react
importing react-router-dom  modules 
*/



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginpage from './Components/Loginpage';             //importing the loginpage component
import Signuppage from './Components/Signuppage';           //importing the signuppage component
import './Components/Loginpage.css'                         //importing the login.css component
import Mainpage from './Components/Mainpage';               //importing the mainpage 


//creating the funtion for importing the all components
function App() {
  return (
    <Router>
    <Switch>
      <Route
        exact path="/"
        render={() => <Loginpage/>}
      />
      <Route
        exact path="/Signup"
        render={() => <Signuppage />}
      />





        <Route
          exact path="/mainpage"
          render={() => <Mainpage />}
        />

    </Switch>
  </Router>
  );
}

//exporting  the app 
export default App;
