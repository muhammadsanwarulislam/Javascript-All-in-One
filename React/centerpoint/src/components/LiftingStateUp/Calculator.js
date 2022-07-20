import React from 'react';
import BoilingVerdict from '././BoilingVerdict';
import TemperatureInput from '././TemperatureInput';
import {tryConvert, toCelsius, toFahrenheit} from './lib/converter';

class Calculator extends React.Component {
    state = {temperature: '', scale: 'c'};

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };
    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator