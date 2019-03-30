import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './StatBar.styles'

export default class StatBar extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.icon}>Icon</Text>
          <View style={styles.statInfo}>
            <View>
              <Text style={styles.statTop}>7h 32m</Text>
            </View>
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressBar}>
              </View>
              <View style={styles.progressFill}></View>
            </View>
            <View style={styles.statDetails}>
              <Text style={styles.statBottom}>Total sleep time</Text>
              <Text style={styles.statBottom}>4 m awake</Text>
            </View>
          </View>
        </View>
      );
    }
  }