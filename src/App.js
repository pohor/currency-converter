import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
        <Button>"Don't click me!"</Button>
        <Button>Click me!</Button>
        <Button>Third button</Button>
    </div>
  );
}

export default App;
