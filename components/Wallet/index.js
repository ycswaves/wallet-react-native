import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import { Header } from './Header';
import { Card } from 'components/Card';
export class Wallet extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.walletContainer}>
          <Card>
            <View style={styles.topUpContainer}>
              <Image source={require('../../images/ovo-top-up.png')} />
              <Text style={styles.topupTagLine}>Enjoy cashless payments and hassle-free rides!</Text>
            </View>
            <View style={styles.topupActionContainer}>
              <Text style={styles.topupAction}>Top Up Now</Text>
            </View>

          </Card>
          <View style={styles.recentContainer}>
            <Text style={styles.recentTitle}>Recent activity</Text>
            <Card type="light">
                <Image style={styles.transactionImg} source={require('../../images/illustration-empty-transaction.png')} />
                <Text style={styles.textCenter}>Make a Transaction Today!</Text>
                <Text style={[styles.tipDetails, styles.textCenter]}>
                  Your new transaction activity will appear here.
                </Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fb',
  },

  topUpContainer: {
    flexDirection: 'row',
  },

  topupTagLine: {
    flex: 1,
    marginLeft: 15,
    lineHeight: 20,
    alignSelf: 'center',
  },

  topupActionContainer: {
    borderTopWidth: 1,
    borderTopColor: '#f0efef',
    marginTop: 15,
    paddingTop: 15
  },

  topupAction: {
    color: '#00a5cf',
    alignSelf: 'center',
    fontSize: 16,
  },

  walletContainer: {
    paddingTop: 0,
    paddingHorizontal: '5%',
    paddingBottom: 20,
    marginTop: -45,
  },

  transactionImg: {
    alignSelf: 'center',
    marginBottom: 15,
  },

  recentContainer: {
    marginTop: 40,
  },

  recentTitle: {
    color: '#898d97',
    marginBottom: 10,
  },
  
  tipDetails: {
    color: '#898d97',
    fontSize: 12,
    marginTop: 10,
  },

  textCenter: {
    textAlign: 'center',
  }
});
