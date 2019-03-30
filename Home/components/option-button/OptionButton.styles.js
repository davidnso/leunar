import {
    StyleSheet
} from 'react-native';
import {
    Colors
} from '../../../Colors';
import { Fonts } from '../../../Font';

export const styles = StyleSheet.create({
    container:{ 
        backgroundColor: Colors.LUENAR_PURPLE,
        alignItems:'center',
        height: '100%', 
        borderRadius: 10,
        width: '100%',
        paddingHorizontal:20, 
    },
    option:{
    fontSize: 18,
    fontFamily: Fonts.MEDIUM,
    color: Colors.WHITE},
    info:{
        fontSize: 16,
        fontFamily: Fonts.LIGHT,
        color: Colors.WHITE
    }, 
})

