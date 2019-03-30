import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from './OptimizeSleep.styles'



export default class OptimizeSleepScreen extends React.Component {
constructor(){
  super();
  this.state = {
   
  }
}
 

    render() {
      return (
        <View style={styles.container}>
        <View>
          <View style={styles.topHeader}>
          <Text style={styles.headerText}>Potential improvement</Text>
            <Text style={styles.sleepScoreNum}>9</Text>
            <Text style={styles.sleepScoreTxt}>Sleep Points</Text>
          </View>
            
            <Text style={styles.headerTextMd}>Optimization report</Text>
            <Text style={styles.contentTxt}>
              Committing to more exercise and avoiding foods likely to cause heartburn within 3 to 4 hours of bedtime, will help to improve your sleep score by 9 points. Although this is not a large increase, this small change can be the difference between acute mental clarity and mid-day fog.
            </Text>
        </View>
        <TouchableOpacity style={styles.optimizeButton} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.optimizeButtonTxt}>Great Thanks!</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }