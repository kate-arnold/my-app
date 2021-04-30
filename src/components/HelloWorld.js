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
  constructor(props) {
    super(props);
    this.state = {v1: '', v2: '', v3: ''};

    this.handleV1Change = this.handleV1Change.bind(this);
    this.handleV2Change = this.handleV2Change.bind(this);
    this.handleV3Change = this.handleV3Change.bind(this);
  }

  handleV1Change(e) {
    this.setState({v1: e.target.value});
  }

  handleV2Change(e) {
    this.setState({v2: e.target.value});
  }

  handleV3Change(e) {
    this.setState({v3: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>

        <div className="line-between-components"></div>

        <NumberList numbers={n} />

        <div className="line-between-components"></div>

        <form>
          <div className="mt">
            <input type="text" value={this.state.v1} onChange={this.handleV1Change} />
          </div>
          <div className="mt">
            <textarea value={this.state.v2} onChange={this.handleV2Change} />
          </div>
          <div className="mt">
            <select value={this.state.v3} onChange={this.handleV3Change}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </div>
        </form>

        <div className="mt">
          <div>v1: {this.state.v1}</div>
          <div>v2: {this.state.v2}</div>
          <div>v3: {this.state.v3}</div>
        </div>

        <div className="line-between-components"></div>
      </div>
    );
  }
}

export default HelloWorld;
