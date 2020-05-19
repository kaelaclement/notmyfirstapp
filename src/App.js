import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Heading from './components/Heading';
import AboutDave from './components/AboutDave';
import NavBar from './components/Navbar';
import Pet from './components/Pet';
import Movies from './components/Movies';
import Student from './components/Student';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Heading />
        <AboutMe />
        <AboutDave />
        <Pet name="Rebbols" age={15} species="doggo" faveFood="treats he couldn't keep down, the little idiot" walks={11} />
        <Pet name="Cedric" age={2} species="fancy rat" faveFood="carrots" walks={5} />
        <Pet name="Opus" age={5} species="doggo" faveFood="literally anything" walks={10} />
      </div>
    )
  }
}

export default App;
