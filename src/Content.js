import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import { connect } from './react-redux';

class Content extends Component {
    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>React.js content</p>
                <ThemeSwitch />
            </div>
        )
    }
}

Content.propTypes = {
    themeColor: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);

export default Content;