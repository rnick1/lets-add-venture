  import './App.css';
  import ProfileQuestions from "./pages/ProfileQuestions/ProfileQuestions";
  import Signup from "./pages/SignUp/SignUp";
  import LogIn from "./pages/LogIn/LogIn";
  import React from "react";
  import Home from './pages/Home/Home';
  // import Upload from './components/Upload/upload'
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
  import Profile from './pages/Profile';
  import Map from "./pages/Map/Map";
  
  function App() {
    return (
      <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/login'>
          <LogIn />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/map'>
          <Map />
        </Route>
        <Route exact path='/questions'>
          <ProfileQuestions />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;