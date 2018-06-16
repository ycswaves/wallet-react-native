import React from 'react';
import { StyleSheet, View } from 'react-native';

// import './card.scss';

export const Card = (props) => {
  let finalStyle = [styles.container];
  if (props.type === 'light') {
    finalStyle.push(styles.light);
  }
  return (
    <View style={finalStyle}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    shadowColor: '#1c1c1c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 6,
    backgroundColor: 'white',
  },

  light: {
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  }

});
