import React from 'react';
import logo from './logo.svg';
import './App.css';

function Button() {
    return (
        <button>Click me!</button>
    );
}

function App() {
  return (
    <div className="App">
      <p>Hello</p>
        <Button/>
    </div>
  );
}

export default App;
