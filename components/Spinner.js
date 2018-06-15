import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export class Spinner extends Component {
  state = {
    spinnerRotate: new Animated.Value(0),
  }

  spinnerAnimation = Animated.loop(
    Animated.timing(
      this.state.spinnerRotate,
      {
        toValue: 360,
        duration: 500,
        easing: Easing.linear
      }
    )
  )

  componentDidMount() {
    this.spinnerAnimation.start();
  }

  componentWillUnmount() {
    this.spinnerAnimation.stop();
  }

  render() {
    return (
      <Animated.Text
        style={{
          transform: [{rotate: this.state.spinnerRotate.interpolate(
            {
              inputRange: [0, 360],
              outputRange: ['0deg', '360deg']
            })
          }, {perspective: 1000}]
        }} >
        <EvilIcons name="spinner-3" size={40} />
      </Animated.Text>
    )
  }
}