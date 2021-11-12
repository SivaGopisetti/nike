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
<<<<<<< HEAD
import PageNotFound from './Components/PageNotFound';
import Dashboard from './Components/Landingpage';
=======
import PageNotFound from './Components/pageNotFound';
import Landingpage from './Components/Landingpage'; //importingdashboard';

/**
 * @description:creating the funtion for importing the all components
 * @returns JSX elements
 */
>>>>>>> cb58d99dde6a1a927e8822d144359408f41db179


function App() {
  return (
    <Router>
    <Switch>
    <Route
        exact path="/"
        render={() => <Landingpage/>}
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
=======

>>>>>>> cb58d99dde6a1a927e8822d144359408f41db179
        <Route
          exact path="/Mainpage"
          render={() => <Mainpage />}
        />
<<<<<<< HEAD
      <Route Mainpage={PageNotFound} />
=======

      <Route Signuppage={PageNotFound} />
>>>>>>> cb58d99dde6a1a927e8822d144359408f41db179
    </Switch>
  </Router>
  );
}

//exporting  the app 
export default App;
