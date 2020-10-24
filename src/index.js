import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

//Axios Global Defaults
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Axios.defaults.headers.common['Authorization'] = 'Auth TOKEN'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

// Can be useful to add header globally if needed like authorization
//Request Interceptor
Axios.interceptors.request.use(
	request =>
	{
		console.log(request)
		return request;
	},
	error =>
	{
		console.log(error)
		return Promise.reject(error)
	}
)

//Response Interceptor
Axios.interceptors.response.use(
	response =>
	{
		console.log(response)
		return response;
	},
	error =>
	{
		console.log(error)
		return Promise.reject(error)
	}
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
