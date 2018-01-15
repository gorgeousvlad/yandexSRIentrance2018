import React, { Component } from 'react';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer/MainContainer"
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MainContainer/>
      </div>
    );
  }
}

export default App;
