import React, { Component } from 'react';
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer"
import './styles/mixins.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header needButton = {true}/>
       <MainContainer/>
      </div>
    );
  }
}

export default App;
