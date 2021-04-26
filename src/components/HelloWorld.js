import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <div>It is {this.state.date.toLocaleTimeString()}</div>
        <div className="line-between-components"></div>
      </div>
    );
  }
}

export default HelloWorld;
