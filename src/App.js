import React, { Component } from 'react';
import Header from './components/header';
import Famous from './components/famous';
import FamousList from './components/FamousList';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      famousList: [],
    }
  }

  logFamous = (famousPerson) => {
    console.log('submit clicked');
    
    const addPeep = famousPerson.person;
    const addRoll = famousPerson.role;
    const newFamous = {
      person: addPeep,
      role: addRoll
    }
    this.setState({
      famousList: [...this.state.famousList, newFamous]
    })
    console.log(this.state.famous);

  }


  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Famous logFamous={this.logFamous}/>
        <br />
        <FamousList famousList={this.state.famousList}/>
      </div>
    );
  }
}

export default App;
