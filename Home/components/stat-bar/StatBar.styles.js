import {
    StyleSheet
} from 'react-native';
import {
    Colors
} from '../../../Colors';
import { Fonts } from '../../../Font';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LUENAR_PURPLE,
        alignItems: 'center',
        height: 80,
        borderRadius:10,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    statInfo:{
        flex: 1
    },
    icon: {
        color: Colors.SOFT_WHITE,
        fontSize: 28,
        marginRight: 15
    },
    progressBarWrapper: {
        position: 'relative',
        width: '100%',
        height: 8,
        borderRadius: 100,
        marginBottom: 5
    },
    progressBar: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.BLACK,
        opacity: .15,
        borderRadius: 100,
    },
    progressFill: {
        position: 'absolute',
        height: '100%',
        width: '80%',
        backgroundColor: Colors.SPECTRUM_GRADIENT.green,
        borderRadius: 100
    },
    statDetails:{
        flexDirection: 'row',
        justifyContent: 'space-between',    
    },
    statBottom:{
        fontFamily: Fonts.LIGHT,
        color: Colors.SOFT_WHITE,
        fontSize: 16
    }, 
    statTop:{ 
        fontFamily: Fonts.BOLD, 
        color: Colors.WHITE,
        fontSize: 20,
        marginBottom: 5,
    }
});