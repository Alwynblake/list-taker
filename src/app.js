import React from 'react';
import Clock from './Components/Clock/Clock';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container.js';
import './app.scss';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Clock />
          <Header />
          <Container />
        </React.Fragment>
    )
  }
}

export default App;