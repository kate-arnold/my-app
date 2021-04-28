import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import TicTacToe from './components/TicTacToe';
import HelloWorld from './components/HelloWorld';
import ToDoList from './components/ToDoList';
import Clock from './components/Clock';
import './index.css';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Kate's React Sandbox</h1>

          <div id="sandbox-nav" className="flexbox">
            {/*
            <Link to="/">Home</Link>
            <Link to="/clock">Clock</Link>
            <Link to="/todo">To To List</Link>
            <Link to="/tictactoe">Tic Tac Toe</Link>
            */}
            <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
            <NavLink to="/clock" activeClassName="nav-active">Clock</NavLink>
            <NavLink to="/todo" activeClassName="nav-active">To To List</NavLink>
            <NavLink to="/tictactoe" activeClassName="nav-active">Tic Tac Toe</NavLink>
          </div>

          <div className="line-between-components"></div>

          <Switch>
            <Route exact path="/">
              <HelloWorld name="Kate" />
            </Route>

            <Route path="/todo">
              <ToDoList />
            </Route>

            <Route path="/tictactoe">
              <TicTacToe />
            </Route>

            <Route path="/clock">
              <Clock />
            </Route>
          </Switch>
        </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
