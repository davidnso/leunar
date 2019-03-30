import React from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './SleepStats.styles'
import RecommendationCard from './components/RecommendationCard';

import {LinearGradient} from 'expo';

export default class SleepStatsScreen extends React.Component {
constructor(){
  super();
  this.state = {
    REM_VAL: 300,
    DEEP_VAL: 150,
    LIGHT_VAL: 200,
    AWAKE_VAL: 15
  }
}
 

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topHeader}>
              <Text style={styles.headerText}>Your results</Text>
            </View>
            <View style={styles.sleepScoreSection}>
              <View style={styles.sleepScoreWrap}>
                <Text style={styles.sleepScoreNum}>82</Text>
                <Text style={styles.sleepScoreTxt}>Sleep Score</Text>
              </View>
              <View style={styles.scoreFeedback}>
                <Text style={styles.scoreFeedbackTxt}>Keep it up!</Text>
              </View>
            </View>

            <View>
              <Text style={styles.sleepCycleHeader}>Sleep cycles</Text>
              <View style= {styles.statGroup}>
              <View style={styles.statWrapper}>
                <LinearGradient style = {{...styles.statBar, width: this.state.AWAKE_VAL}}  colors={['#8430E5', '#BA2EC3']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}></LinearGradient>
                <View style={styles.statTxtWrap}>
                  <Text style={styles.statTxt}>Awake</Text>
                  <Text style={styles.statTxtSm}>15 m</Text>
                </View>
              </View>
              <View style={styles.statWrapper}>
                <LinearGradient style = {{...styles.statBar, width: this.state.REM_VAL}}  colors={['#8430E5', '#BA2EC3']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} ></LinearGradient>
                <View style={styles.statTxtWrap}>
                  <Text style={styles.statTxt}>REM</Text>
                  <Text style={styles.statTxtSm}>5 h 32 m</Text>
                </View>
              </View>
              <View style={styles.statWrapper}>
                <LinearGradient style = {{...styles.statBar, width: this.state.LIGHT_VAL}}  colors={['#8430E5', '#BA2EC3']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} ></LinearGradient>
                <View style={styles.statTxtWrap}>
                  <Text style={styles.statTxt}>Light</Text>
                  <Text style={styles.statTxtSm}>2 h 3m</Text>
                </View>
              </View>
              <View style={styles.statWrapper}>
                <LinearGradient style = {{...styles.statBar, width: this.state.DEEP_VAL}}  colors={['#8430E5', '#BA2EC3']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}></LinearGradient>
                <View style={styles.statTxtWrap}>
                  <Text style={styles.statTxt}>Deep</Text>
                  <Text style={styles.statTxtSm}>1h 32 m</Text>
                </View>
              </View>
              </View>
            </View>

            <View>
              <Text style={styles.recommendationHeader}>Recommendations</Text>
              <FlatList
          data={[
            {key: '1', title: 'Exercise daily', text: 'Aerobic exercise has been found to improve sleep quality, mood and quality of life in people with insomnia, especially when combined with sleep hygiene education.'},
            {key: '2', title: 'Avoid fatty, spicy, and fried foods',text: 'Avoiding fatty, spicy and fried foods before bedtime prevents heartburn leading to a better nights sleep. Even better, plan to have your last meal of the day (regardless of food type) three to four hours before bedtime.'},
            {key: '3', title: 'Optimize your light/dark exposures', text: 'Adequate exposure to sunlight during the day and darkness at night helps to maintain a healthy sleep-wake cycle.'},
          ]}
          style={styles.recommendationList}
          renderItem={({item}) => <RecommendationCard style={styles.recommendation} title={item.title} text={item.text}></RecommendationCard>}>
  
          </FlatList>
            </View>
        </View>
          <TouchableOpacity style={styles.optimizeButton} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('OptimizeSleep')}>
            <Text style={styles.optimizeButtonTxt}>Optimize My Sleep</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }