import React, { Component } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

export class Toast extends Component {
  timer = null;

  state = {
    toBeDismissed: false,
    scale: new Animated.Value(0)
  }

  createScaleAnimation(scaleTo, delay = 0) {
    return Animated.timing(
      this.state.scale, 
      {
        toValue: scaleTo,
        duration: 300,
        delay: delay,
      }
    )
  }

  scaleUp = this.createScaleAnimation(1, 500)
  scaleDown = this.createScaleAnimation(0)

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.dismiss();
    }, 4000);
    this.scaleUp.start()
  }

  dismiss = () => {
    this.scaleDown.start(() => {
      this.props.dismiss()
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { scale } = this.state;
    return (
      <Animated.View 
        style={[
          styles.container,
          { transform: [{ scale }] } 
        ]} >
        {this.props.children}
        <Text style={styles.closeBtn} onPress={this.dismiss}>&#10005;</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 66,
    zIndex: 10,
    flexDirection: 'row',
    backgroundColor: '#caefdb',
    marginHorizontal: 20,
    shadowColor: '#1c1c1c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 6,
  },

  closeBtn: {
    alignSelf: 'center',
    marginRight: 10,
  }
});
