import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';

import './App.css';
// import { Button } from "./components/Button";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <Router>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Switch>
                <Route path="/" component={Calculator} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
