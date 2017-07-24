import React, { Component } from 'react';

class AddTask extends Component {
  render() {
    return (
      <div className="addTask">
      	<h1>To Do:</h1>
		<form>
					<label>Add something you need to do:</label>
					<input 
						type="text" 
						name="addToDo" 
						placeholder="Enter something you need to do..."/>
					<input 
						type="submit" 
						value="Add" 
						name="submit" />
		</form>
      </div>
    );
  }
}

export default AddTask;