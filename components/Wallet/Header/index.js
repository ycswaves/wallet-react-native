import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { Navbar } from 'components/Navbar';
import { Toast } from 'components/Toast';
import { Tooltip } from 'components/Tooltip';
import { Actions } from 'react-native-router-flux';

export class Header extends Component {
  state = {
    showToast: true,
    showTip: false,
  }

  dismissToast = () => {
    this.setState({showToast: false, showTip: true});
  }
  render() {
    const { showTip, showToast } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.backgroundPos}
          colors={['#fff', '#f7f9fb', '#d6eff2', '#43c1cc']}
          locations={[0, 0.57, 0.71, 1]}
          >
          <Image style={styles.backgroundImg} source={require('../../../images/bubble-pattern.png')} />
          <Navbar backAction={() => {Actions.pop()}}>
            <View style={styles.containerCenter}>
              <Text>GrabPay</Text>
              <Text style={styles.subtitle}>by OVO</Text>
            </View>
          </Navbar>
          {showTip &&
            <Tooltip style={styles.toolTip}>
              <Text style={styles.tooltipText}>Check your payment methods here.</Text>
            </Tooltip>}
          {showToast && 
            <Toast dismiss={this.dismissToast}>
              <View style={styles.toastView}>
                <Image style={{}} source={require('../../../images/icon/wallet-activated.png')} />
                <Text style={styles.activateText}>
                  All set! You can start using your balance now.
                </Text>
              </View>
            </Toast>}
          <View style={styles.rowContainer}>
            <Text style={styles.currencyText}>IDR</Text>
            <Text style={styles.moneyText}>50.000</Text>
            <Image style={{position: 'relative', top: 6}} source={require('../../../images/icon/currencies-dark.png')} />

          </View>
          <View style={[styles.rowContainer, styles.containerCenter]}>
          <Image source={require('../../../images/icon/reward-tier-platinum.png')} />
            <Text style={[styles.pointColor, styles.pointText]}>400 points</Text>
            <MaterialIcons style={[styles.pointColor, {position: 'relative', top: 1}]} name="keyboard-arrow-right" size={25} />
          </View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 244,
  },

  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundPos: {
    flex: 1
  },

  backgroundImg: {
    position: 'absolute',
  },

  subtitle: {
    fontSize: 12,
    color: '#4c2a86'
  },

  rowContainer: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'center',
  },

  currencyText: {
    color: '#676767',
  },

  moneyText: {
    fontSize: 36,
    lineHeight: 36,
    marginHorizontal: 10,
  },

  pointColor: {
    color: '#676767'
  },

  pointText: {
    marginHorizontal: 10,
  },

  activateText: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 16
  },

  toastView: {
    flexDirection: 'row',
    flex: 1,
    padding: 10
  },

  toolTip: {
    position: 'absolute',
    right: 15,
    top: 65,
    width: '48%',
    zIndex: 10,
  },

  tooltipText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: -10,
    textAlign: 'center'
  }

});
