import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import Header from './Header';
import Content from './Content';

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const createStore = (reducer) => {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.map(listener => listener());
    }
    dispatch({});
    return { getState, dispatch, subscribe };
}

const store = createStore(themeReducer);


export default class Index extends Component {
    getChildContext() {
        return { store }
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }

}

Index.childContextTypes = {
    store: PropTypes.object
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);