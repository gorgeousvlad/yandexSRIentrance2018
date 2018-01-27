import React, { Component } from 'react';
import './styles/mixins.scss';
import './App.scss';
import MainScreen from "./components/MainScreen/MainScreen";
import FormScreen from "./components/FormScreen/FormScreen";



class App extends Component {
  render() {
    return (
     // <MainScreen/>
     <FormScreen date = {new Date()}/>
    );
  }
}

export default App;
