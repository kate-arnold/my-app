import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div className="line-between-components"></div>
      </div>
    );
  }
}

export default HelloWorld;
