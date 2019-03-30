import {
    StyleSheet
} from 'react-native';
import {
    Colors
} from '../../../Colors';
import {
    Fonts
} from '../../../Font';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LUENAR_PURPLE,
        height: 200,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    TopHeader: {
        alignItems: "center",
    },
    TopText: {
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE,
        fontSize: 22,
    },
    ratingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    Rating: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.WHITE
    },
    ratingText: {
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE,
        fontSize: 20,
    }
})