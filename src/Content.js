import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ThemeSwitch from './ThemeSwitch';

export default class Content extends Component {
    constructor() {
        super();
        this.state = { themeColor: '' }
    }

    componentWillMount() {
        const {store} = this.context;
        store.subscribe(()=>this._updateThemeColor());
        this._updateThemeColor()
    }

    _updateThemeColor() {
        const { store } = this.context;
        const state = store.getState();
        this.setState({ themeColor: state.themeColor })
    }

    render() {
        return (
            <div>
                <p style={{ color: this.state.themeColor }}>React.js content</p>
                <ThemeSwitch />
            </div>
        )
    }
}

Content.contextTypes = {
    store: PropTypes.object
}