import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return <UserGreeting isLoggedIn = {props.isLoggedIn}/>;
    }
    return <GuestGreeting isLoggedIn={props.isLoggedIn}/>;
  }

export default Greeting