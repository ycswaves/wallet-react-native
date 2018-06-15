import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export const Titlebar = (props) => {
  return (
    <View style={styles.container}>
      <EvilIcons style={styles.icon} name="close" size={25} />
      <Text style={{fontSize: 18}}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    paddingTop: 30,
    shadowColor: '#1c1c1c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  icon: {
    position: 'absolute',
    left: 10,
    top: 30,
  }
});
