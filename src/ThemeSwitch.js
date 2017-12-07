import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from './react-redux';

class ThemeSwitch extends Component {
    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color);
        }
    }

    render() {
        return (
            <div>
                <button style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')} >Red</button>
                <button style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
    
}

ThemeSwitch.propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
}

export default ThemeSwitch;