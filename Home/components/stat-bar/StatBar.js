import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './StatBar.styles'
import { LinearGradient } from 'expo';

export default class StatBar extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
      return (
        <LinearGradient style={styles.container}  colors={['#1D0B38', '#7303C0']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
        <View style={{marginRight: 10}}>
          {this.props.icon}
        </View>
          <View style={styles.statInfo}>
            <View>
              <Text style={styles.statTop}>{this.props.stat}</Text>
            </View>
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressBar}>
              </View>
              <LinearGradient style={{...styles.progressFill, width: this.props.value}} colors={this.props.progressGradient} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}></LinearGradient>
            </View>
            <View style={styles.statDetails}>
              <Text style={styles.statBottom}>{this.props.title}e</Text>
              <Text style={styles.statBottom}>{this.props.extra}</Text>
            </View>
          </View>
        </LinearGradient>
      );
    }
  }