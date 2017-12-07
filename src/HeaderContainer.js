import React, { Component } from 'react';
import Header from './Header';
import { connect } from './react-redux';

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer;
