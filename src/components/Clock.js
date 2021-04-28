import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date1: new Date(), date2: new Date(), hoursAdded: 0};
      //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      this.timerId1 = setInterval( this.tick1, 1000 );
      this.timerId2 = setInterval( this.tick2, 1000 );
    }

    componentWillUnmount() {
      clearInterval(this.timerId1);
      clearInterval(this.timerId2);
    }

    //Method 1: get the current time only once, then add seconds and hours to the stored value
    tick1 = () => {
      const d = new Date(this.state.date1.getTime() + 1000);
      this.setState(
        (state) => ({ date1: d })
      );
    }

    //Method 2: get the current time every second, then add the stored number of additional hours
    tick2 = () => {
      let d = new Date();
      d = new Date(d.getTime() + 1000*60*60*this.state.hoursAdded);
      this.setState(
        (state) => ({ date2: d })
      );
    }

    jump1 = () => { //arrow function ensures that "this" is bound
      const d2 = new Date(this.state.date1.getTime() + 1000*60*60);
      this.setState(
        (state) => ({ date1: d2 })
      );
    }

    jump2 = () => {
      this.setState(
        (state) => ({ hoursAdded: state.hoursAdded + 1 })
      );
    }

    handleClick = () => {
      console.log(`You clicked me, ${this.props.name}!`);
    }

    render() {
      return (
        <div>
          <div className="mt">
            Clock 1: {this.state.date1.toLocaleTimeString()} &nbsp;&nbsp;
            <input type="button" value="Jump an hour (method 1)" onClick={this.jump1} />
          </div>

          <div className="mt">
            Clock 2: {this.state.date2.toLocaleTimeString()} &nbsp;&nbsp;
            <input type="button" value="Jump an hour (method 2)" onClick={this.jump2} />
          </div>

          <div className="mt">
            <input type="button" value="Click me" onClick={this.handleClick} />
          </div>
          
          <div className="line-between-components"></div>
        </div>
      );
    }
}

export default Clock;
