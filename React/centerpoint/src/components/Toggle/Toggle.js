import React from 'react'

class Toggle extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    //   }
    state = { isToggleOn: true };

    handleClick =() =>{
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
        const {isToggleOn} = this.state;
        return(
            <div>
                <button onClick={this.handleClick}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle