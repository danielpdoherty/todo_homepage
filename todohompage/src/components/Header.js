import React, { Component } from 'react';
import AddTask from './AddTask.js';

class Header extends Component {
	constructor(props){
		super(props);

		this.state = {
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString().replace(/:\d{2}\s/,' ');
		}
	}

  render() {
    return (
      <div className="header">
      	<header>
			<div className="welcomeMessage">
				<h1>Welcome</h1>
				<h1>{this.state.date}</h1>
				<h1>{this.state.time}</h1>
			</div>
			<AddTask />
		</header>
      </div>
    );
  }
}

export default Header;
