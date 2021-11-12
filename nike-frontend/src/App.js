/*
importing the react from react
importing react-router-dom  modules 
*/



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginpage from './Components/Loginpage';             //importing the loginpage component
import Signuppage from './Components/Signuppage';           //importing the signuppage component
import './Components/Loginpage.css'                         //importing the login.css component
<<<<<<< HEAD
import Mainpage from './Components/Mainpage';               //importing the mainpage 
=======
import PageNotFound from './Components/pageNotFound';
import Dashboard from './Components/dashboard';
>>>>>>> 2dd1e07b80cd88e1523299243e535ccfb1e8ee3a


//creating the funtion for importing the all components
function App() {
  return (
    <Router>
    <Switch>
    <Route
        exact path="/"
        render={() => <Dashboard/>}
      />
      <Route
        exact path="/Loginpage"
        render={() => <Loginpage/>}
      />
      <Route
        exact path="/Signup"
        render={() => <Signuppage />}
      />
<<<<<<< HEAD





        <Route
          exact path="/mainpage"
          render={() => <Mainpage />}
        />

=======
      <Route Signuppage={PageNotFound} />
>>>>>>> 2dd1e07b80cd88e1523299243e535ccfb1e8ee3a
    </Switch>
  </Router>
  );
}

//exporting  the app 
export default App;
