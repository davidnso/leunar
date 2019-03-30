import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './Home.styles'
import StatBar from './components/stat-bar/StatBar';
import OptionButton from './components/option-button/OptionButton';
import SleepScore from './components/Spinner/Spinner'

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.topHeader}>
          <Text style={styles.headerText}>Today</Text>
          <Text style={styles.settingIcon}>Icon</Text>
        </View>
        <View style={styles.sleepScoreSection}>
        <Image
        style={{width: 200, height: 200, marginBottom: 25}}
         source={{uri: "https://media.giphy.com/media/3LdSb8AcFc6S7eQCA3/giphy.gif"}}
        /><Text>we here wit</Text>
          <TouchableOpacity activeOpacity={0.5}  style={styles.seeMoreBtn}>
            <Text style={styles.seeMoreBtnTxt}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statGroup}>
          <View style={styles.statBar}>
            <StatBar></StatBar>
          </View>
          <View style={styles.statBar}>
            <StatBar></StatBar>
          </View>
        </View>
        <Text style= {styles.title}> Manage Your Sleep</Text>
        <View style={styles.manageSleepSection}>
          <View style={styles.buttonGroup}>
            <View style={styles.optionBtnWrapper}>
              <OptionButton></OptionButton>
            </View>
            <View style={styles.optionBtnWrapper}>
              <OptionButton></OptionButton>
            </View>
            <View style={styles.optionBtnWrapper}>
              <OptionButton></OptionButton>
            </View>
          </View>
        </View>        
      </View>
      );
    }
  }