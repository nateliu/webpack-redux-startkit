import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import HeaderContainer from './HeaderContainer';
import Content from './Content';
import { Provider } from './react-redux'

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
    render() {
        return (
            <div>
                <HeaderContainer />
                <Content />
            </div>
        )
    }

}

ReactDOM.render(
    <Provider store ={store}>
        <Index />
    </Provider>,
    document.getElementById('app')
);