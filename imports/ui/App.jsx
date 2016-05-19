import React, { Component, PropTypes } from 'react';
// To use react-meteor-data, we need to wrap our component in a container 
// using the createContainer Higher Order Component
import { createContainer } from 'meteor/react-meteor-data';
 
// Get tasks from the collection tasks
import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
 
{/*
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
*/}

// App component - represents the whole app
// The wrapped App component fetches tasks from the Tasks collection and supplies 
// them to the underlying App component it wraps as the tasks prop
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
          tasks: Tasks.find({}).fetch(),
         };
}, App);
