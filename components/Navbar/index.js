import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

// import './navbar.scss';

export const Navbar = (props) => {
  return (
    <View style={styles.container}>
      <EvilIcons style={styles.iconLeft} name="chevron-left" size={40} />
      {props.children}
      <Image style={styles.iconRight} source={require('../../images/icon/payment-methods.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    alignItems: 'center',
  },

  iconLeft: {
    position: 'absolute',
    top: 25,
    left: 10,
  },

  iconRight: {
    position: 'absolute',
    top: 30,
    right: 20,
  },

});
