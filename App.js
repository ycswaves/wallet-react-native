import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Otp } from './components/Otp';
import { Wallet } from './components/Wallet';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Otp /> */}
        <Wallet />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
