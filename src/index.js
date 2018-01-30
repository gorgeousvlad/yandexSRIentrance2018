import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/reducers'
import storeDefault from './store/storeDefault'
import registerServiceWorker from './registerServiceWorker';


let store = createStore(rootReducer,storeDefault);
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
