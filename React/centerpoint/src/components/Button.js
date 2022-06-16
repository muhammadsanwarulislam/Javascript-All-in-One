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
        const { change, locale, show } = this.props;
        return(
            <>
            <button type="button" onClick={() => change(locale)}>{locale === 'bn-BD' ? 'Change Cloke' : 'পরিবর্তন করুন'}</button>
            { show && <p>Value is true</p>}
            </>
        )
    }
}

export default Button