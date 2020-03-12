import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';

import {setSearchField, requestRobots} from '../actions.js';

const mapStateToProps = state => {
  return {
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render () {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filterRobot = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1> Loading </h1> :
      (
      <fragment>
        <main className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <br/>
        <CardList robots={ filterRobot}/>
        </main>
      </fragment>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
