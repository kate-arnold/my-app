import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  renderRow = (n) => {
    let r = [];

    for (let i = 0; i < 3; i++) {
      r.push( this.renderSquare(3*n + i) );
    }

    return r;
  }

  render() {
    return (
      <div>
        <div className="board-row">{this.renderRow(0)}</div>
        <div className="board-row">{this.renderRow(1)}</div>
        <div className="board-row">{this.renderRow(2)}</div>
      </div>
    );
  }
}

class TicTacToe extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          i: null,
        }],
        xIsNext: true,
        stepNumber: 0,
      }
  }

  handleClick(i) {
    const h = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = h[h.length - 1];
    const s = current.squares.slice();
    if (calculateWinner(s) || s[i]) {
      return;
    }
    s[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: h.concat([{
        squares: s,
        i: i,
      }]),
      stepNumber: h.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      const coords = move ? ' (' + ((step.i % 3) + 1) + ', ' + ((step.i - (step.i % 3))/3 + 1) + ')' : '';
      const cn = (move === this.state.stepNumber) ? 'currentstep' : '';
      return (
          <li key={move} className={cn}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            {coords}
          </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
