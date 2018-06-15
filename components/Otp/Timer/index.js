import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export class Timer extends Component {
  state = {
    seconds: this.props.count || 30
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState({seconds: seconds - 1})
      } else {
        this.props.timeout();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  render() {
    const { seconds } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.fontGrey}>
          Request New Code in
        </Text>
        <Text style={styles.fontGrey}>00:{seconds < 10 ? `0${seconds}` : seconds}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  fontGrey: {
    color: '#ccd6dd'
  }
});