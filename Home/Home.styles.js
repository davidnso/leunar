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
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  sleepScoreSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  seeMoreBtn: {
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: `${Colors.LUENAR_PURPLE}66`,
    borderColor: Colors.LUENAR_PURPLE,
    paddingHorizontal: 35,
    paddingVertical: 7
  },
  seeMoreBtnTxt: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: Fonts.MEDIUM
  },
  headerText: {
    color: Colors.SOFT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.BOLD
  },
  settingIcon: {
    color: Colors.SOFT_WHITE
  },
  statGroup: {
    marginBottom: 30
  },
  statBar: {
    marginBottom: 20
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionBtnWrapper: {
    height: 138,
    width: 138
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    marginBottom: 25,
  }
});