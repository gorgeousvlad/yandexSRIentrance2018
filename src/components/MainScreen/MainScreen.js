import React, { Component } from 'react';
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer"


export default class MainScreen extends Component {
  render() {
    return (
      <div className="main-screen">
       <Header needButton = {true}/>
       <MainContainer/>
      </div>
    );
  }
}
