import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

const n = [1,2,3,4,5];

function ListItem(props) {
  return (<li>{props.value}</li>);
}

function NumberList(props) {
  return (
      <ul>
        {props.numbers.map((number) =>
          <ListItem key={number.toString()} value={number} />
        )}
    </ul>
  );
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>

        <NumberList numbers={n} />

        <div className="line-between-components"></div>
      </div>
    );
  }
}

export default HelloWorld;
