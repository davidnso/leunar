import {
    StyleSheet
} from 'react-native';
import {
    Colors
} from '../../Colors';
import { Fonts } from '../../Font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.LUENAR_PURPLE,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginBottom: 15
    },
    title:{
        fontSize: 20,
        fontFamily: Fonts.SEMI_BOLD
    },
    text: {
        color: Colors.SOFT_WHITE
    },
    content:{
        fontSize: 16,
        fontFamily: Fonts.MEDIUM
    },
    leftContainer: {
        flex: 2,
    }
});