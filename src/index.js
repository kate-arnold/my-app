import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './components/TicTacToe';
import HelloWorld from './components/HelloWorld';
import ToDoList from './components/ToDoList';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld name="Kate" />
        <ToDoList />
        <TicTacToe />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
