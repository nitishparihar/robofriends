import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll'
import './App.css'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));
}

onSearchChange = (event) => {
	console.log(event.target.value)
	this.setState({ searchfield: event.target.value })
}

render() {
	const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	 return (
	  <div className= 'tc'>
	  	<h1 className= 'f1'>RoboFriends</h1>
	  	<Searchbox searchChange = {this.onSearchChange}/>
	  	<Scroll>
		 <CardList robots = {filteredRobots}/>
		</Scroll>
	  </div>
   );
  }
}

export default App;