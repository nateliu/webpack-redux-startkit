import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Header extends Component {
    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>This is a H1 font</h1>
        )
    }
}

Header.propTypes = {
    themeColor: PropTypes.string
}

export default Header