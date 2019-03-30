import {
  StyleSheet
} from 'react-native';
import {
  Colors
} from '../Colors'
import {
  Fonts
} from '../Font'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MAIN_BG,
    paddingHorizontal: 25,
    paddingTop: 50,
    paddingBottom: 30,
    justifyContent: 'space-between'
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: Colors.SOFT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.BOLD
  },
  sleepScoreSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  sleepScoreWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  sleepScoreNum: {
    color: Colors.SOFT_WHITE,
    fontSize: 60,
    fontFamily: Fonts.SEMI_BOLD
  },
  sleepScoreTxt: {
    color: Colors.SOFT_WHITE,
    fontSize: 20,
    fontFamily: Fonts.LIGHT
  },
  scoreFeedback: {
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: `${Colors.LUENAR_PURPLE}66`,
    borderColor: Colors.LUENAR_PURPLE,
    paddingHorizontal: 35,
    paddingVertical: 7
  },
  scoreFeedbackTxt: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: Fonts.MEDIUM
  },
  sleepCycleHeader: {
    color: Colors.SOFT_WHITE,
    fontSize: 26,
    fontFamily: Fonts.BOLD
  },
  settingIcon: {
    color: Colors.SOFT_WHITE
  },
  statGroup: {
    marginTop: 20,
    marginBottom: 30,
  },
  statWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statBar: {
    marginBottom: 10,
    height: 25,
    borderRadius: 5,
    width: 0,
    backgroundColor: Colors.LUENAR_PURPLE,
    marginRight: 10
  },
  statTxtWrap: {
    flexDirection: 'row'
  },
  statTxt: {
    color: Colors.SOFT_WHITE,
    fontFamily: Fonts.BOLD,
    marginRight: 5
  },
  statTxtSm: {
    color: Colors.SOFT_WHITE,
    fontFamily: Fonts.LIGHT
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionBtnWrapper: {
    height: 138,
    width: 138
  },
  optimizeButton: {
    backgroundColor: Colors.LUENAR_PURPLE,
    borderRadius: 10,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optimizeButtonTxt: {
    color: Colors.SOFT_WHITE,
    fontSize: 22,
    fontFamily: Fonts.MEDIUM
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    marginBottom: 25,
  },
  recommendationHeader: {
    fontSize: 26,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    marginBottom: 25,
  },
  recommendationList: {
    height: 220,
  },
  recommendation: {
    height: 60,
    width: 60,
    marginBottom: 200
  }
});