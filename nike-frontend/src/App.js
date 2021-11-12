/*
importing the react from react
importing react-router-dom  modules 
*/



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginpage from './Components/Loginpage';             //importing the loginpage component
import Signuppage from './Components/Signuppage';           //importing the signuppage component
import './Components/Loginpage.css'                         //importing the login.css component
import PageNotFound from './Components/pageNotFound';
import Dashboard from './Components/dashboard';


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
      <Route Signuppage={PageNotFound} />
    </Switch>
  </Router>
  );
}

//exporting  the app 
export default App;
