import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export class Tooltip extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.pointer} />
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#33c072',
    padding: 10,
  },

  pointer: {
    width: 10,
    height: 10,
    position: 'relative',
    zIndex: 10,
    top: -15,
    backgroundColor: '#33c072',
    left: '90%',
    transform: [{rotate: '45deg'}]
  }
});