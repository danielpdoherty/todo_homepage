import React, { Component } from 'react';
import AddTask from './AddTask.js';

class Header extends Component {
	constructor(props){
		super(props);

		this.state = {
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString().replace(/:\d{2}\s/,' ')
		}
	}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.sunDial = setInterval(
      () => this.sunDial(),
      10800000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.sunDial);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString().replace(/:\d{2}\s/,' ')
    });
  }

  sunDial(){
    this.setState({
      date: new Date().toLocaleDateString()
    });
  }

  //10,800,000 ms

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
