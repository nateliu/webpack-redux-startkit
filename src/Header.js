import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from './react-redux';

class Header extends Component {
    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>This is a H1 font</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header.propTypes = {
    themeColor: PropTypes.string
}

Header = connect(mapStateToProps)(Header)

export default Header