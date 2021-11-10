import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Signuppage from './Components/Signuppage';
import './Components/Loginpage.css'
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

    </Switch>
  </Router>
  );
}

export default App;
