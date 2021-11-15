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
import PageNotFound from './Components/PageNotFound';
import Dashboard from './Components/Landingpage';

/**
 * @description:creating the funtion for importing the all components
 * @returns JSX elements
 */



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
      <Route
          exact path="/Mainpage"
          render={() => <Mainpage />}
      />

      <Route Mainpage={PageNotFound} />

    </Switch>
  </Router>
  );
}

//exporting  the app 
export default App;
