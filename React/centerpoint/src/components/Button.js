import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change:currentChange } = this.props;
        const {change:nextChange }= nextProps;
        if(currentChange === nextChange) {
            return true;
        }else {
            return false;
        }
    }
    render() {
        const { change, locale } = this.props;
        return(
            <button type="button" onClick={() => change(locale)}>Click Here</button>
        )
    }
}

export default Button