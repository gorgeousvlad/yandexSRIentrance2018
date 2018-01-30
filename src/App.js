import React, { Component } from 'react';
import './styles/mixins.scss';
import './App.scss';
import MainSmart from "./components/MainSmart/MainSmart";
import FormSmart from "./components/FormSmart/FormSmart";

class App extends Component {
  render() {
    return (
    	<div>
    		<MainSmart/>
    		<FormSmart/>
    	</div>
    );
  }
}

export default App;
