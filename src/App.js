import React, { Component } from 'react';
import Header from './components/header';
import Famous from './components/famous';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Famous />
      </div>
    );
  }
}

export default App;
