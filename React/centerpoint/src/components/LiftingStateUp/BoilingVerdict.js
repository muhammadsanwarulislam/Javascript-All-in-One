import React from 'react'

const BoilingVerdict = (props) => {
    const celsius = props.celsius
  if(celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict