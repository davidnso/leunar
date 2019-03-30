import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Font} from 'expo';
import { Colors } from './Colors';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home/Home'
import SleepStatsScreen from './SleepStats/SleepStats';
import OptimizeSleepScreen from './OptimizeSleep/OptimizeSleep';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  SleepStats: SleepStatsScreen,
  OptimizeSleep: OptimizeSleepScreen
},{headerMode: 'none', initialRouteName: 'Home'});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
   await Font.loadAsync({
      'dosis-light': require('./assets/fonts/Dosis-Light.ttf'),
      'dosis-medium': require('./assets/fonts/Dosis-Medium.ttf'),
      'dosis-semi-bold': require('./assets/fonts/Dosis-SemiBold.ttf'),
      'dosis-bold': require('./assets/fonts/Dosis-Bold.ttf'),
    });
    this.setState({fontLoaded: true})
  }
  render() {
    if(this.state.fontLoaded){
      return (
      <AppContainer></AppContainer>
      )
    }else{
      return (<View style={styles.container}></View>)
    }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MAIN_BG,
  },
});


