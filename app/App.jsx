import React from 'react';
import './App.scss';

export default class App extends React.Component {

    render() {
        console.log('Loaded the app component');
        return (
            <h1 className="App">Hello world</h1>
        );
    }

}
