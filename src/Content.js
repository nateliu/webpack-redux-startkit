import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ThemeSwitchContainer from './ThemeSwitchContainer';
import { connect } from './react-redux';

class Content extends Component {
    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>React.js content</p>
                <ThemeSwitchContainer />
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