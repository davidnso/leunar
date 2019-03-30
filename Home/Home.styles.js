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
  modalOverlay:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.9)',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
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