import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';

import { Titlebar } from 'components/Titlebar';
import { Pin } from './Pin';
import { Timer } from './Timer';
import { Actions } from 'react-native-router-flux';

export class Otp extends Component {
  state = {
    misMatch: false,
    requesting: false,
  }

  timeout = () => {
    this.setState({requesting: false});
  }
  
  startTimer = () => {
    this.setState({requesting: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <Titlebar title="Activate via OTP" />
        <View style={styles.instruction}>
          <Text style={styles.instructionText}>
            Enter the 4-digit code sent to {"\n"}
            +62 81281231234
          </Text>
        </View>
        <Pin size={4} onValid={() => {Actions.wallet()}} />
        <View style={styles.resendContainer}>
          <Text style={{marginBottom: 5}}>Didn't receive it?</Text>
          {
            this.state.requesting ? 
            <Timer timeout={this.timeout} /> 
            : <TouchableOpacity onPress={this.startTimer}>
                <Text style={{color: '#00a5cf'}}>Request New Code</Text>
              </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  resendContainer: {
    alignItems: 'center',
    padding: 5,
  },

  instruction: {
    paddingTop: '5%',
    alignItems: 'center',
    height: 120
  },

  instructionText: {
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '200'
  }
});