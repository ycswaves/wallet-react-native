import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Spinner } from "../../Spinner";
import { mockValidation } from '../../../services/validateOtp';

export class Pin extends Component {
  
  state = {
    password: '',
    lastNumKeyin: null,
    misMatch: false,
    isValidating: false,
  };

  slots = Array(4).fill(0).map((_, i) => i);

  validate(password) {
    this.setState({isValidating: true});
    mockValidation(password).then(isValid => {
      let newState = {};
      if (isValid) {
        this.props.validateOtp();
        return;
      } else {
        newState.misMatch = true;
        newState.password = '';
      }
      newState.isValidating = false;
      this.setState(newState);
    });
  }

  onChange = (password) => {
    const { size } = this.props;

    if (password.length === size) {
      setTimeout(() => {
        this.validate(password);
      }, 500);
    }

    if (password.length > size) {
      return false;
    }

    this.setState({
      password,
      misMatch: false,
      lastNumKeyin: password[password.length - 1]
    });

    setTimeout(() => {
      this.setState({lastNumKeyin: null});
    }, 500);
  }

  activeStyle = (i) => {
    return this.state.password.length === i ? styles.pinslotActive : {};
  }

  statusSymbol = (i) => {
    const { password, lastNumKeyin } = this.state;

    if (lastNumKeyin && password.length - 1 === i) {
      return lastNumKeyin;
    }

    if (password.length - 1 >= i) {
      return <MaterialCommunityIcons style={{color: '#676767'}} name="checkbox-blank-circle" />
    }
    
    return '-'
  }

  renderError() {
    return (
      <View style={styles.pinContainer} >
        {
          this.slots.map(i => 
            <View key={i} style={[styles.pinslot, styles.pinslotError, styles.containerCenter]}>
              <Text style={[styles.pinslotText, styles.pinslotTextError]}>-</Text>
            </View>
          )
        }
      </View>
    )
  }

  renderSlots() {
    if (this.state.isValidating) {
      return (
        <View style={styles.containerCenter}>
          <Spinner />
          <Text>Validating</Text>
        </View>
      );
    }
    return (
      <View style={styles.pinContainer} >
        {
          this.slots.map(i => 
            <View key={i} style={[styles.pinslot, styles.containerCenter, this.activeStyle(i)]} >
              <Text style={styles.pinslotText}>{this.statusSymbol(i)}</Text>
            </View>
          )
        }
      </View>
    )
  }

  render() {
    const { misMatch } = this.state;

    return (
      <View style={styles.container}>
        {misMatch? this.renderError() : this.renderSlots()}
        <TextInput
          onChangeText={this.onChange}
          value={this.state.password}
          keyboardType="phone-pad"
          autoFocus
          style={{position:'absolute', top: -9999, zIndex: -22}} />
        {misMatch && 
          <View style={[styles.textErrorContainer, styles.containerCenter]}>
            <Text style={[styles.pinslotTextError, styles.fontSmall]}>Invalid password. Please try again.</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    // flex: 1
  },

  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '25%',
    // height: 200
  },

  textErrorContainer: {
    paddingVertical: 5,
  },

  pinslot: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#c5c5c5',
  },

  pinslotActive: {
    borderColor: '#00b14f',
  },

  pinslotError: {
    borderColor: '#ee6352',
  },

  pinslotText: {
    fontSize: 24,
    fontWeight: '200',
  },

  pinslotTextError: {
    color: '#ee6352',
  },

  fontSmall: {
    fontSize: 12,
  },

  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  }


});