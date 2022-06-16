import React from 'react';
import Button from './Button';

class Clock extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date()
  //   }
  // }

  //Sort hand we can write
  state = { date : new Date(), locale:'bn-BD' }
  
  componentDidMount() {
    this.clockTimer = setInterval(() => {this.tick()}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handelClock = (locale) => {
    this.setState({
      locale: locale,
    });
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const { date, locale } = this.state;
    let button;
    if(locale === 'en-US') {
      button = (<Button change={this.handelClock} locale='bn-BD' show = {false}/>)
    }else {
      button = (<Button change={this.handelClock} locale='en-US' show = {true}/>)
    }
    return (
      <>
        <div>
          <h2>{locale === 'bn-BD' ? 'Time :' : 'এখন সময় :'} {date.toLocaleTimeString(locale)}</h2>
        </div>
        {button}
      </>
    );
  }
}

export default Clock;