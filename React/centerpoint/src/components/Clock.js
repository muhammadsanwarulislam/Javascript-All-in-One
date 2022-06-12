import React from 'react';

class Clock extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date()
  //   }
  // }

  //Sort hand we can write
  state = {date : new Date() }
  
  componentDidMount() {
    this.clockTimer = setInterval(() => {this.tick()}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const {date} = this.state;
    return (
      <div>
        <h2>It is {date.toLocaleTimeString(this.props.local)}.</h2>
      </div>
    );
  }
}

export default Clock;