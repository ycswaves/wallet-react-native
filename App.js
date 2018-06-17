import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Otp } from './components/Otp';
import { Wallet } from './components/Wallet';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="otp" component={Otp} hideNavBar />
          <Scene key="wallet" component={Wallet} hideNavBar />
        </Scene>
      </Router>
  
    );
  }
}


