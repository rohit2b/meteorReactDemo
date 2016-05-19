import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Task extends Component {
  // render() is called by React to get a description of the HTML 
  // that this component should display
  render() {
    return (
      // Components can also receive data from their parents through 
      // attributes called props
      <li>{this.props.task.text}</li>
    );
  }
}
 
Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
