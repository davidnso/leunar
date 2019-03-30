import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './Home.styles'
import StatBar from './components/stat-bar/StatBar';
import OptionButton from './components/option-button/OptionButton';
import OptionModal from './components/option-modal/OptionModal';

const SleepComponent0 = <Image
style={{width: 200, height: 200, marginBottom: 25}}
source={require('../assets/images/sleep-score-0.png')}
/>
const SleepComponentAnimated = <Image
style={{width: 200, height: 200, marginBottom: 25}}
source={require('../assets/images/sleep-score.gif')}
/>;

const SleepComponentLoaded = <Image
style={{width: 200, height: 200, marginBottom: 25}}
source={require('../assets/images/sleep-score.png')}
/>;

const SleepTimeIcon = <Image
style={{width: 35, height: 35}}
resizeMode={'contain'}
source={require('../assets/icons/moon-icon.png')}
/>

const SpectrumGradient = ['#56EFFF', '#E20DE9', '#56EFFF', '#0CFE91'];

const HeartIcon = <Image
style={{width: 35, height: 35}}
resizeMode={'contain'}
source={require('../assets/icons/heart-icon.png')}
/>
const LuenarAccentGradient = ['#8430E5','#BA2EC3']

const ClockIcon = <Image
style={{width: 45, height: 45}}
resizeMode={'contain'}
source={require('../assets/icons/clock-icon.png')}
/>

const GoalsIcon = <Image
style={{width: 45, height: 45}}
resizeMode={'contain'}
source={require('../assets/icons/tasks-icon.png')}
/>

const DoctorIcon = <Image
style={{width: 45, height: 45}}
resizeMode={'contain'}
source={require('../assets/icons/doctor-icon.png')}
/>

export default class HomeScreen extends React.Component {

  
  constructor() {
    super()
    this.state = {
      SleepComponent: SleepComponent0,
      showModal: true,
    }
    this.confirmModal = this.confirmModal.bind(this);
  }

  confirmModal(){
    this.setState({showModal: false});
    this.setState({SleepComponent: SleepComponentAnimated});
    setTimeout(()=>{
      this.setState({SleepComponent:  SleepComponentLoaded })
    }, 1800)
  }
    render() {
      return (
        <View style={styles.container}>
        {
          this.state.showModal ? (<View style={styles.modalOverlay}>
          <OptionModal clickHandler={this.confirmModal}></OptionModal>
        </View>): null
        }
        
        <View style={styles.topHeader}>
          <Text style={styles.headerText}>Today</Text>
          <Image
          style={{width: 20, height: 20}}
          source={require('../assets/icons/settings-icon.png')}
          />
        </View>
        <View style={styles.sleepScoreSection}>
        {this.state.SleepComponent}
          <TouchableOpacity activeOpacity={0.5}  style={styles.seeMoreBtn} onPress={() => this.props.navigation.navigate('SleepStats')} >
            <Text style={styles.seeMoreBtnTxt}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statGroup}>
          <View style={styles.statBar}>
            <StatBar icon={SleepTimeIcon} stat={'7 h 32 m'} value={'82%'} title={'Total sleep time'} extra={'15 m awake'} progressGradient={SpectrumGradient}></StatBar>
          </View>
          <View style={styles.statBar}>
            <StatBar icon={HeartIcon} stat={'55 bpm'} value={'95%'} title={'Average resting heart rate'} extra={'95% of usual'} progressGradient={LuenarAccentGradient}></StatBar>
          </View>
        </View>
        <Text style= {styles.title}> Manage Your Sleep</Text>
        <View style={styles.manageSleepSection}>
          <View style={styles.buttonGroup}>
            <View style={styles.optionBtnWrapper}>
              <OptionButton icon={ClockIcon} text={'Modify Alarm'} info={'7:00 AM'}></OptionButton>
            </View>
            <View style={styles.optionBtnWrapper}>
              <OptionButton icon={GoalsIcon} text={'Manage Goals'} info={'8 of 10'}></OptionButton>
            </View>
            <View style={styles.optionBtnWrapper}>
              <OptionButton icon={DoctorIcon} text={'Improve Sleep'} info={'10 new'}></OptionButton>
            </View>
          </View>
        </View>        
      </View>
      );
    }
  }