import React from 'react';

class ToDoItem extends React.Component {
  getStyle = () => {
    //if (this.props.it.completed) {
    //  return { textDecoration: 'line-through' }
    //} else {
    //  return { textDecoration: 'none' }
    //}
    return {
      textDecoration: this.props.it.completed ? 'line-through' : 'none',
      background: '#eee',
      padding: '10px'
    }
  }

  markComplete = (e) => {
    console.log(this.props);
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.markComplete()} />
        {this.props.it.title}
      </div>
    )
  }
}

export default ToDoItem;
