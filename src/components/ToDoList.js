import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem';
import '../index.css';

class ToDoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'First item',
        completed: false
      },
      {
        id: 2,
        title: 'Second item',
        completed: true
      },
      {
        id: 3,
        title: 'Third item',
        completed: false
      }
    ],
  }

  render() {
    return(
      <div>
        <h1>To Do List</h1>
        <div>
          {
              this.state.todos.map(
                (td) => (<ToDoItem key={td.id} it={td} />)
              )
          }
        </div>

        <div className="line-between-components"></div>
      </div>
    );
  }
}

export default ToDoList;
