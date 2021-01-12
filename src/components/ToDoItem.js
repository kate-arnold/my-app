import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItem extends React.Component {
  render() {
    return (
      <div> {this.props.it.title} </div>
    )
  }
}
 export default ToDoItem;
