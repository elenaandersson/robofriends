import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import {robots} from '../components/robots.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';

// This is the app component
class App extends Component {
  constructor() {
    super()
    this.state = {
      // The app has to states, robots and searchfield
      //It is things that changes in the App
      // depending on the input
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange = (event) =>{
    this.setState ({searchfield: event.target.value})
  }
  render () {
    const {robots, searchfield} = this.state;
    const filterRobot = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    /*This is the DOM or VRDom, that you will see on the browser
    A searchbox that update when the input event accures
    The robotcards, filters robots when input event accures
    */
    return (
      <fragment>
        <main className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <br/>
        <CardList robots={ filterRobot}/>
        </main>
      </fragment>
      );
  }
}

export default App;
