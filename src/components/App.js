import React from 'react';
import AppBar from './AppBar';
import Container from '@material-ui/core/Container';
import CounterApp from './CounterApp';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        <Container axWidth="lg">
            <AppBar/>
            <CounterApp/>
        </Container>
        </Provider>
    );
};

export default App;