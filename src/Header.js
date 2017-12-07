import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Header extends Component {
    constructor(){
        super();
        this.state = {themeColor:''}
    }

    componentWillMount(){
        const {store} = this.context;
        store.subscribe(()=>this._updateThemeColor());
        this._updateThemeColor()
    }

    _updateThemeColor(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({themeColor:state.themeColor})
    }

    render(){
        return(
            <h1 style={{color:this.state.themeColor}}>This is a H1 font</h1>
        )
    }
}

Header.contextTypes = {
    store: PropTypes.object
}