import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// import './toast.scss';

export class Toast extends Component {
  timer = null;

  state = {
    toBeDismissed: false
  }

  componentDidMount() {
    // this.timer = setTimeout(() => {
    //   this.dismiss();
    // }, 3000);
  }

  dismiss = () => {
    this.setState({toBeDismissed: true});
    setTimeout(this.props.dismiss, 301);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { toBeDismissed } = this.state;
    return (
      <View style={styles.container} className={`toast ${toBeDismissed? 'toast-to-be-dismissed' : ''}`}>
        {this.props.children}
        <Text style={styles.closeBtn} className="toast__close" onPress={this.dismiss}>&#10005;</Text>
      </View>
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
